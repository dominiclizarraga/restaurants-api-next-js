"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import restaurantCategories from "@/restaurant_categories";
import BackButton from "@/components/BackButton";

export default function FormCreate() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        "https://the-fork.api.lewagon.com/api/v1/restaurants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-User-Email": process.env.NEXT_PUBLIC_API_EMAIL,
            "X-User-Token": process.env.NEXT_PUBLIC_API_TOKEN,
          },
          body: JSON.stringify({ restaurant: formData }),
        }
      );
  
      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("API Response:", errorResponse);
        throw new Error(errorResponse.message || `Failed with status ${response.status}`);
      }
  
      const data = await response.json();
      router.push("/");
    } catch (error) {
      console.error("Submission Error:", error);
      alert(error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-1/2 mx-auto">
      <BackButton text={`← Back to Restaurants`} href={"/"} />
      <h3 className="text-2xl">Add a restaurant 🍳</h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter restaurant name (e.g., Delicious Bites)"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md shadow-sm border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Enter full restaurant address (e.g., 123 Tasty Street, London)"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md shadow-sm border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full rounded-md shadow-sm border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select category</option>
          {restaurantCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add Restaurant
      </button>
    </form>
  );
}
