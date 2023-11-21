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
  function comparePets(a: roomsType, b: roomsType) {
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
      <h1>This is a barebones tailwind web page. </h1>
      <br />
      <Link href="/about/me">Learn more about me </Link>
      <br />
      <a href="./about/work">Learn about where I work</a>
      <br />
      <a href="/">Go home home</a>
    </div>
  );
}
