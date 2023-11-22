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
        Learn about me...
      </h2>
      <div>
        <Glasscard />
        <br />

        <br />
        <Link
          className="pb-4 text-indigo-100 font-mono tracking-wider text-base"
          href="/about"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
