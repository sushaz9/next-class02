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
      <p>I work at Breakout Liverpool</p>
      <br />
      <a href="https://breakoutliverpool.com">Click here to book in!</a>
      <br />

      <Link href="/about">Go back to about</Link>
      <br />
      <br />
      <Link href="/">Go home home</Link>
    </div>
  );
}
