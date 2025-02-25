import SideBar from "@/components/SideBar";

export default function Page() {
  return (
    <div className="m-8">
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left content - 3 columns */}
          <div className="md:col-span-3">
            <div className=" space-y-4 text-lg text-gray-600 my-12">
              <p>
                <span className="font-bold">Зиновьев Василий Павлович</span> –
                главный редактор, доктор исторических наук, профессор Томского
                государственного университета{" "}
              </p>
              <p>
                <span className="font-bold">Демешкина Татьяна Алексеевна</span>{" "}
                – заместитель главного редактора, доктор филологических наук,
                профессор Томского государственного университета
              </p>
              <p>
                <span className="font-bold">Уткин Владимир Александрович</span>{" "}
                – заместитель главного редактора, доктор юридических наук,
                профессор Томского государственного университета
              </p>
              <p>
                <span className="font-bold">Глущенко Никита Андреевич</span> –
                ответственный секретарь, кандидат исторических наук, доцент
                Томского государственного университета
              </p>
              <p>
                <span className="font-bold">Ахмедшин Рамиль Линарович</span> –
                доктор юридических наук, профессор Томского государственного
                университета
              </p>
              <p>
                <span className="font-bold">Румянцев Петр Петрович</span> –
                кандидат исторических наук, доцент Томского государственного
                университета
              </p>
              <p>
                <span className="font-bold">Айзикова Ирина Александровна </span>{" "}
                – доктор филологических наук, профессор Томского
                государственного университета
              </p>
            </div>
          </div>

          {/* Right sidebar - 1 column */}
          <SideBar />
        </div>
      </main>
    </div>
  );
}
