import BackButton from "@/components/BackButton";

export default function Create() {

  return (
    <div className="min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BackButton text={`← Back to Restaurants`} href={"/"} />
      Form to create
    </div>
  );
}
