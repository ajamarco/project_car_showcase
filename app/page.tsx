import Image from "next/image";

// Importing the components from 'index.ts' file in the "@/components" directory
import { Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
    </main>
  );
}
