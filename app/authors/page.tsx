import Link from "next/link";
import SideBar from "@/components/SideBar";

export default function AuthorsPage() {
  return (
    <div className="m-8">
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left content - 3 columns */}
          <div className="md:col-span-3">
            <div className="text-sm space-y-4 flex flex-col text-blue-700 underline">
              <Link href="/authors/pravila-oformleniya-statey">
                🢂 Правила оформления статей
              </Link>
              <Link href="/authors/oformlenie-statey">
                🢂 1. Оформление статей
              </Link>
              <Link href="/authors/informaciya-na-angliyskom-yazyke">
                🢂 2. Информация на английском языке
              </Link>
              <Link href="/authors/svedeniya-ob-avtorakh">
                🢂 3. Сведения об авторах
              </Link>
              <Link href="/authors/poryadok-recenzirovaniya-rukopisej-statej">
                🢂 Порядок рецензирования рукописей статей
              </Link>
            </div>
          </div>

          {/* Right sidebar - 1 column */}
          <SideBar />
        </div>
      </main>
    </div>
  );
}
