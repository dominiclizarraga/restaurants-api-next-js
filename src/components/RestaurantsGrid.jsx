import Link from "next/link";

export default function RestaurantsGrid({ restaurants }) {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🍴 Restaurants Grid</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );

  function RestaurantCard({ restaurant }) {
    return (
      <article className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-2">📍 {restaurant.name}</h3>
        <p className="text-gray-700 mb-1">
          🏷️ <span className="font-medium">Category:</span> {restaurant.category}
        </p>
        <p className="text-gray-700 mb-4">
          🌍 <span className="font-medium">Location:</span> {restaurant.address}
        </p>
        <Link
          href={`/restaurants/${restaurant.id}`}
          className="inline-block bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
      </article>
    );
  }
}
