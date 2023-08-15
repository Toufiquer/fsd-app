import LogIn from "@/components/LogIn/LogIn";
import Registration from "@/components/Registration/Registration";
import Image from "next/image";

export default function Home() {
  return (
    <main className={` w-full p-8`}>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen gap-8">
        <LogIn />
        <Registration />
      </div>
    </main>
  );
}
