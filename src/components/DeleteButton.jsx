"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteButton({ restaurantId }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    // Confirm before deleting
    if (!window.confirm('Are you sure you want to delete this restaurant?')) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${restaurantId}`, {
        method: 'DELETE',
        headers: {
          'X-User-Email': process.env.NEXT_PUBLIC_API_EMAIL,
          'X-User-Token': process.env.NEXT_PUBLIC_API_TOKEN,
          'Content-Type': 'application/json',
        }
      });

      const responseBody = await response.text();

      if (!response.ok) {
        throw new Error(`Failed to delete restaurant. Status: ${response.status}, Body: ${responseBody}`);
      }

      router.push('/');
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.message);
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleDelete}
        disabled={isDeleting}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
      >
        {isDeleting ? 'Deleting...' : 'Delete Restaurant'}
      </button>
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
}