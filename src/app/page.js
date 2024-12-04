import { getRestaurants } from "@/actions";
import RestaurantsGrid from "@/components/RestaurantsGrid";

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <div className="justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3 className="text-3xl font-bold text-gray-800">Restaurants</h3>
        <RestaurantsGrid restaurants={restaurants} />
      </main>
    </div>
  );
}

