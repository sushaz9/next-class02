import Link from "next/link";

export default function Page() {
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
