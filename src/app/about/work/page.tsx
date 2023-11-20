import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>I work at Breakout Liverpool</p>
      <Link href="/about">Go back to about</Link>
    </div>
  );
}
