import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h2 className="text-lg pb-5 flex-col items-center font-mono text-purple-100 text-xl">
          Hi! I'm Susie 👋🏼
        </h2>
        <p className="pb-2 text-indigo-100 font-mono tracking-wide text-lg">
          Tailwind is tricky
        </p>
        <p className="pb-4 text-indigo-100 font-mono tracking-wider text-xs">
          whAt iS gOiNG on
        </p>
        <Link
          className="pb-4 text-indigo-100 font-mono tracking-wider text-2xl"
          href="/about"
        >
          Click <strong>here</strong> for more!
        </Link>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <img
            src="https://i.pinimg.com/736x/c1/c8/6d/c1c86dc8ebcde10d3f480eb59b37f104.jpg"
            className="object cover h-48 w-96 opacity-25 hover:opacity-100"
          />
        </div>
      </div>
    </main>
  );
}

// className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-100"
// className="max-h-[80%] flex items-center bg-green-200"
