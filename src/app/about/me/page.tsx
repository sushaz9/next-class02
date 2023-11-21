import Link from "next/link";
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
      <h2>
        My name is Susie and I live in Liverpool. I work in an escape room and
        we have lots of cool games
      </h2>
      <div>
        <br />

        <br />
        <Link href="/about">Go back</Link>
      </div>
    </div>
  );
}
