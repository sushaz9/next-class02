import Link from "next/link";

// type roomParam = { params: { rooms: string } };

/*export function generateMetadata({ params }: roomParam) {
  const modTitle = params.rooms[0].toLowerCase() + params.rooms.slice(1);
  return {
    title: `Susies Work - ${modTitle}`,
    description: `Susies Work - ${params.rooms}`,
  };
}*/

// { params }: roomParam)

export default function Page() {
  return (
    <div>
      <a
        className="pb-4 text-indigo-100 font-mono tracking-wider"
        href="https://breakoutliverpool.com"
      >
        I work at Breakout Liverpool.
        <br />
        <br /> Click here to book in!
      </a>
      <br />
      <br />

      <Link
        className="pb-4 text-indigo-100 font-mono tracking-wider"
        href="/about"
      >
        Go back to about
      </Link>
      <br />
      <br />
      <Link className="pb-4 text-indigo-100 font-mono tracking-wider" href="/">
        Go home
      </Link>
    </div>
  );
}
