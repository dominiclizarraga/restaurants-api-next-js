"use client";

import { useActionState, useState } from "react";
import restaurantCategories from "@/restaurant_categories";
import BackButton from "@/components/BackButton";
import { createRestaurant } from "@/actions";
import { useRouter } from "next/navigation"; // este hook es para CLIENT!!!

export default function FormCreate() {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }
    try {
      const data = await createRestaurant(formData)
      setFormData({})
      router.push("/")
    } catch (error) {
      console.error("Submission Error:", error);
      setErrors(prev => ({
        ...prev, 
        submit: 'Failed to submit restaurant. Please try again.'
      }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    };
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if name is empty or just whitespace
    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = 'Restaurant name is required';
    }

    // Check if address is empty or just whitespace
    if (!formData.address || formData.address.trim() === '') {
      newErrors.address = 'Restaurant address is required';
    }

    // Check if category is not selected
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    // Set errors and return validation status
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          className={`mt-1 block w-full rounded-md shadow-sm border-2 ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
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
          className={`mt-1 block w-full rounded-md shadow-sm border-2 ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
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
          className={`mt-1 block w-full rounded-md shadow-sm border-2 ${errors.category ? 'border-red-500' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500`}
        >
          <option value="">Select category</option>
          {restaurantCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category}</p>
        )}
      </div>

      {errors.submit && (
        <div className="text-red-500 text-sm mb-4">{errors.submit}</div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add Restaurant
      </button>
    </form>
  );
}
