import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>This is the about page</h2>
      <Link href="/about/me">Learn things about me </Link>
      <br />
      <a href="./about/work">Learn about where I work</a>
      <br />
      <a href="/">Go home home</a>
    </div>
  );
}
