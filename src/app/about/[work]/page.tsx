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
        className="pb-4 text-indigo-100 font-mono tracking-wider text-lg"
        href="https://breakoutliverpool.com"
      >
        I work at Breakout Liverpool.
        <br />
        <br /> Click <strong>here</strong> to book in!
      </a>
      <br />
      <br />

      <Link
        className="pb-4 text-indigo-100 font-mono tracking-wider text-lg"
        href="/about"
      >
        Go back to about
      </Link>
      <br />
      <br />
      <div className="relative flex min-h-screen flex-col items-center justify-between p-24">
        <a href="/">
          <img
            src="https://i.pinimg.com/originals/5e/e4/1a/5ee41adbb9b63d96eac10cfad0dd5c26.png"
            className="object cover h-20 w-25 opacity-25 hover:opacity-100 pointer-events-auto hover:animate-pulse"
          />{" "}
        </a>
      </div>
    </div>
  );
}

// https://static.vecteezy.com/system/resources/thumbnails/010/157/862/small/house-and-home-icon-symbol-sign-free-png.png
