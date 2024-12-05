import { fetchRestaurantById } from "@/actions";
import BackButton from "@/components/BackButton";
import Image from "next/image";

export default async function Detail({ params }) {
  const { id } = await params;

  try {
    const restaurantDetails = await fetchRestaurantById(id);

    return (
      <div className="justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-6 sm:gap-8 items-center sm:items-start">
        <BackButton text={`← Back to Restaurants`} href={"/"} />
        <Image
          src="/default_dish.png"
          alt="default_dish"
          width={400}
          height={200}
          className="rounded-lg"
        />
          <h1 className="text-4xl font-bold text-gray-800">{restaurantDetails.name}</h1>
          <p className="text-lg text-gray-600">
            🏷️ <span className="font-medium">Category:</span> {restaurantDetails.category}
          </p>
          <p className="text-lg text-gray-600">
            📍 <span className="font-medium">Address:</span> {restaurantDetails.address}
          </p>
        </main>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Error: {error.message}
        </h1>
      </div>
    );
  }
}
