import Link from "next/link";

type roomsSearchQuery = {
  sortBy: string;
};

type roomsType = {
  name: string;
  id: number;
};

let rooms: roomsType[] = [
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
];

export default function Page() {
  function compareRooms(a: roomsType, b: roomsType) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <div>
      <br />
      <Link
        className="pb-4 text-indigo-100 font-mono tracking-wider"
        href="/about/me"
      >
        Learn about me{" "}
      </Link>
      <br />
      <a
        className="pb-4 text-indigo-100 font-mono tracking-wider"
        href="./about/work"
      >
        Learn about where I work
      </a>
      <br />
      <a className="pb-4 text-indigo-100 font-mono tracking-wider" href="/">
        Go home
      </a>
    </div>
  );
}
