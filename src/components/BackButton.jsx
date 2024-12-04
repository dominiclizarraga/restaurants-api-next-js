import Link from "next/link";

export default function BackButton() {
  return (
    <Link
      href="/"
      className="inline-block mb-6 text-blue-600 font-medium hover:underline"
    >
      ← Back to Restaurants
    </Link>
  );
}