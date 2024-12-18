import { fetchRestaurantById } from "@/actions";
import BackButton from "@/components/BackButton";
import DeleteButton from "@/components/DeleteButton";
import Image from "next/image";

export default async function Detail({ params }) {
  const paramsData = await params;
  console.log(`aqui`, paramsData)

  const restaurantDetails = await fetchRestaurantById(paramsData.id);
  console.log(`aqui__`, restaurantDetails)

  if (restaurantDetails) {
    return (
      <div className="min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-between items-center mb-8">
          <BackButton text="← Back to Restaurants" href="/" />
          <DeleteButton restaurantId={paramsData.id} />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="sm:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{restaurantDetails.name}</h1>
            <p className="text-lg text-gray-600 mb-2">
              🏷️ <span className="font-medium">Category:</span> {restaurantDetails.category}
            </p>
            <p className="text-lg text-gray-600">
              📍 <span className="font-medium">Address:</span> {restaurantDetails.address}
            </p>
          </div>

          <div className="w-3/4 md:w-1/2 flex justify-center">
            <Image
              src="/default_dish.png"
              alt="Restaurant default image"
              width={800}
              height={600}
              priority
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-500">
          Error occurred, restaurant not found!
        </h1>
      </div>
    )
  }
}