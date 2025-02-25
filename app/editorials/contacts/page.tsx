import SideBar from "@/components/SideBar";

export default function Page() {
  return (
    <div className="m-8">
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left content - 3 columns */}
          <div className="md:col-span-3">
            <div className=" space-y-4 text-lg text-gray-600">
              <p>
                Ответственный секретарь редакции журнала – Глущенко Никита
                Андреевич
              </p>
              <p>E-mail: vestnik@mail.tsu.ru, nglushchenko@mail.tsu.ru</p>
            </div>
          </div>

          {/* Right sidebar - 1 column */}
          <SideBar />
        </div>
      </main>
    </div>
  );
}
