import Link from "next/link";
import Image from "next/image";

export default function RestaurantsGrid({ restaurants }) {
  return (
    <div className="p-4">
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
        <Link href={`/restaurants/${restaurant.id}`}>
          <Image
            src={restaurant.image || '/default_restaurant.png'}
            alt={`${restaurant.name} image`}
            width={400}
            height={200}
            className="rounded-t-lg"
          />
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">📍 {restaurant.name}</h3>
          <p className="text-gray-700 mb-1">
            🏷️ <span className="font-medium">Category:</span> {restaurant.category}
          </p>
          <p className="text-gray-700 mb-4">
            🌍 <span className="font-medium">Location:</span> {restaurant.address}
          </p>
          <Link
            href={`/restaurants/${restaurant.id}`}
            className="inline-block text-blue-600 font-medium rounded-md hover:text-blue-700 no-underline hover:underline transition-colors"
          >
            View Details
          </Link>
        </div>
      </article>
    );
  }
}
