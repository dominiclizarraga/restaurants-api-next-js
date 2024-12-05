"use client";

import { useActionState, useState } from "react";
import restaurantCategories from "@/restaurant_categories";
import BackButton from "@/components/BackButton";
import { createRestaurant } from "@/actions";

export default function FormCreate() {
  const [formData, setFormData] = useState({})

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {
      // llamar function del actions.js
      const data = await createRestaurant(formData)
      setFormData({
        // name: "",
        // address: "",
        // category: ""
      })
    } catch (error) {
      console.error("Submission Error:", error);
      // alert(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          onChange={handleInputChange}
          value={formData["name"] || ""}
          placeholder="Enter restaurant name (e.g., Delicious Bites)"
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
          onChange={handleInputChange}
          value={formData["address"] || ""}
          placeholder="Enter full restaurant address (e.g., 123 Tasty Street, London)"
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
          onChange={handleInputChange}
          value={formData["category"] || ""}
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
