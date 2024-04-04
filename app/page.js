import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 text-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            This is Rudra's portfolio website
          </h1>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">
            Check out my work!
          </h2>
        </div>
        <div>
        </div>
      </div>
    </main>
  );
}
