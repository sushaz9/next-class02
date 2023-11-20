import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-green-100">
      <div className="max-h-[80%] flex items-center bg-green-200">
        <h2 className="text-lg pb-5 flex-col items-center">Hi! I'm Susie 👋🏼</h2>
        <p className="pb-2">Tailwind is tricky</p>
        <p className="pb-4">whAt iS gOiNG on</p>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <img src="https://i.pinimg.com/736x/c1/c8/6d/c1c86dc8ebcde10d3f480eb59b37f104.jpg" />
        </div>
      </div>
    </main>
  );
}
