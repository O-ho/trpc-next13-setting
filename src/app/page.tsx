import Image from "next/image";
import ListUser from "@/app/ListUsers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListUser />
    </main>
  );
}
