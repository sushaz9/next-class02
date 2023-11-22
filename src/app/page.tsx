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
          Click on my <strong>face</strong> for more!
        </Link>
        <div className="relative flex min-h-screen flex-col items-center justify-between p-24">
          <a href="/about">
            <img
              src="https://media.discordapp.net/attachments/1174279477174472704/1174314738700787772/IMG_20231115_114708.png?ex=65705f53&is=655dea53&hm=2758ef3c8db8540b4ddf33d4da226ed2303cd953a45d527e97262ee6177295d7&=&format=webp&width=539&height=517"
              className="object cover h-48 w-full opacity-25 hover:opacity-100 pointer-events-auto hover:animate-spin"
            />{" "}
          </a>
        </div>
      </div>
    </main>
  );
}

// className="flex min-h-screen flex-col items-center justify-between p-24 bg-indigo-100"
// className="max-h-[80%] flex items-center bg-green-200"
