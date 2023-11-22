import Glasscard from "@/app/components/GlassCard";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex pb-4 text-indigo-100 font-mono">
      <Glasscard />
      <section className="place-self-end text-xs">
        <Link href="/">Back to home</Link>
      </section>
    </div>
  );
}
