import Link from "next/link";

export default function BackButton({text, href}) {
  return (
    <Link
      href={href}
      className="inline-block mb-6 text-blue-600 font-medium hover:underline"
    >
      {text}
    </Link>
  );
}