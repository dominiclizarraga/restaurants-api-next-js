import { getRestaurants } from "@/actions";
import Header from "@/components/Header";
import RestaurantsGrid from "@/components/RestaurantsGrid";

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <div className="min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <RestaurantsGrid restaurants={restaurants} />
    </div>
  );
}
