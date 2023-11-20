import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2>
        My name is Susie and I live in Liverpool. I live next door to a bowling
        alley. I once walked into my bedroom with a cup of tea in one hand and
        my phone in the other. I went to throw my phone on the bed and instead I
        threw the tea.
      </h2>
      <br />
      <Link href="/about">Go back</Link>
    </div>
  );
}
