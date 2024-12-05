import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full px-4 mt-8 md:mt-0">
      <h3 className="text-3xl font-bold text-gray-800">🍴 Restaurants</h3>
      <Link
        href="/restaurants/create"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add restaurant
      </Link>
    </header>
  );
}
