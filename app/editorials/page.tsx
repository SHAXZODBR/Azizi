import SideBar from "@/components/SideBar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="m-8">
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left content - 3 columns */}
          <div className="md:col-span-3">
            <div className="text-sm space-y-4 flex flex-col text-blue-700 underline">
              <Link href="/editorials/editorial/">🢂 Редакции</Link>
              <Link href="/editorials/contacts/">🢂 Контакты</Link>
              <Link href="/editorials/collegues/">🢂 Редакционная коллегия</Link>
            </div>
          </div>

          {/* Right sidebar - 1 column */}
          <SideBar />
        </div>
      </main>
    </div>
  );
}
