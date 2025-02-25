import SideBar from "@/components/SideBar";

export default function Page() {
  return (
    <div className="m-8">
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left content - 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-xl mb-4">О журнале</h3>
            <div className="space-y-1 text-sm mb-4">
              <p>ISSN 1561-7793 (Print)</p>
              <p>ISSN 1561-803X (Online)</p>
            </div>
            <div className="text-sm space-y-4">
              <p>
                Научный журнал «Вестник Томского государственного университета»
                является мультидисциплинарным периодическим изданием.
                Предшественник (с 1888 г.) - «Известия Императорского Томского
                университета», с 1927 г. - «Труды Томского государственного
                университета». В 1998 году издание университетского журнала было
                возобновлено уже под современным названием. В настоящее время
                «Вестник Томского государственного университета» выходит
                ежемесячно.
              </p>
              <p>
                Журнал входит в
                <a href="#" className="text-blue-600">
                  {" "}
                  Перечень рецензируемых научных изданий
                </a>
                , в которых должны быть опубликованы основные научные результаты
                диссертаций на соискание ученой степени кандидата наук, на
                соискание ученой степени доктора наук. Полные тексты статей
                доступны на сайте журнала и на платформе
                <a href="#" className="text-blue-600">
                  {" "}
                  eLIBRARY.RU
                </a>
                .
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">
                В журнале публикуются статьи по следующим отраслям:
              </h4>
              <ul className="text-sm list-disc pl-5 space-y-1">
                <li>Филологические науки</li>
                <li>Философские науки</li>
                <li>Социологические и политические науки</li>
                <li>Исторические науки</li>
                <li>Педагогические науки</li>
                <li>Юридические науки</li>
              </ul>
            </div>
          </div>
          {/* Right sidebar - 1 column */}
          <SideBar />
        </div>
      </main>
    </div>
  );
}
