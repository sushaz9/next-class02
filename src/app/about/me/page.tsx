import Link from "next/link";
import Glasscard from "@/app/components/GlassCard";

/*import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Susie's work",
  description: "A list of rooms in Breakout Liverpool",
};

type roomsType = {
  name: string;
  id: number;
};

let pets: roomsType[] = [
  {
    name: "Vacancy",
    id: 0,
  },
  {
    name: "Sabotage",
    id: 1,
  },
  {
    name: "Wanted",
    id: 2,
  },
  {
    name: "Outbreak",
    id: 3,
  },
  {
    name: "Spellbound",
    id: 4,
  },
  {
    name: "Reclassified",
    id: 5,
  },
];*/

// {rooms.map((room) => {
//           <Link href={`/rooms/${room.name.toLowerCase()}`}>{room.name}</Link>
export default function Page() {
  return (
    <div>
      <h2 className="text-lg pb-5 flex-col text-center items-center font-mono text-purple-100">
        About me...
      </h2>
      <br />
      <div>
        <Glasscard />
        <br />
        <br />
        <Link
          className="flex flex-col items-center pb-4 text-indigo-100 font-mono tracking-wider text-lg"
          href="/about"
        >
          Go back to about
        </Link>

        <div className="relative flex min-h-screen flex-col items-center justify-between p-24">
          <a href="/">
            <img
              src="https://i.pinimg.com/originals/5e/e4/1a/5ee41adbb9b63d96eac10cfad0dd5c26.png"
              className="object cover h-20 w-25 opacity-25 hover:opacity-100 pointer-events-auto hover:animate-pulse"
            />{" "}
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}
