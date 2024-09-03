import Image from "next/image";
import NavBar from "./ui/navbar";

export default function Home() {
  return ( <>
    <NavBar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Page Main Content</p>
    </main>
    </>
  );
}
