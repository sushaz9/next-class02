import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>I work at Breakout Liverpool</p>
      <br />
      <a href="https://breakoutliverpool.com">Click here to book in!</a>
      <br />
      <br />
      <Link href="/about">Go back to about</Link>
      <br />
      <br />
      <Link href="/">Go home home</Link>
    </div>
  );
}
