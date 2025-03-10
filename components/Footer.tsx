import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00264C] text-white">
      <div className="max-w-[1150px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest News Column */}
          <div>
            <h2 className="text-[13px] mb-5 tracking-wide">
              ПОСЛЕДНИЕ НОВОСТИ
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-[11px] text-[#B4B4B4] mb-1">
                  11-04-2015, 14:46
                </p>
                <Link
                  href="#"
                  className="text-[11px] hover:text-[#B4B4B4] block mb-1"
                >
                  РОССИЙСКИЙ ИНДЕКС НАУЧНОГО ЦИТИРОВАНИЯ
                </Link>
                <p className="text-[11px] text-[#808080]">
                  Опубликованы наукометрические данные РИНЦ за 2014 г. Место в
                  рейтинге Science Index РИНЦ 2014 г. среди
                  мультидисциплинных&nbsp;...
                </p>
              </div>
              <div>
                <p className="text-[11px] text-[#B4B4B4] mb-1">
                  30-04-2014, 09:57
                </p>
                <Link
                  href="#"
                  className="text-[11px] hover:text-[#B4B4B4] block mb-1"
                >
                  СЕМИНАР П.Г. АРЕФЬЕВА
                </Link>
                <p className="text-[11px] text-[#808080]">
                  21-23 апреля 2014 г. главный специалист НЭИКОН П.Г. Арефьев
                  провел в Томском университете обучающий семинар «Труд...
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h2 className="text-[13px] mb-5 tracking-wide">
              КОНТАКТНЫЕ ДАННЫЕ
            </h2>
            <div className="space-y-4">
              <p className="text-[11px] text-[#B4B4B4] leading-relaxed">
                634050, г. Томск, пр. Ленина, 36, Томский государственный
                университет (ТГУ), Редакция журнала «Вестник Томского
                государственного университета»
              </p>
              <p className="text-[11px] text-[#B4B4B4] leading-relaxed">
                Ответственный секретарь редакции журнала - Гуреенко Никита
                Андреевич
              </p>
              <p className="text-[11px]">vestnik@mail.tsu.ru</p>
            </div>
          </div>

          {/* Journal Column */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#6d759b] mt-4">
        <div className="max-w-[1000px] mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-[11px]">
          <div className="flex items-center space-x-1 p-6">
            <span>
              © 1998 - 2025 Вестник Томского государственного университета
            </span>
            <div className="flex items-center ml-4">
              <span className="mx-1 text-[#4D7093]">|</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center space-x-4 text-[#4D7093] ">
            <Link href="#" className="hover:text-white">
              Главная
            </Link>

            <Link href="/archive/" className="hover:text-white">
              Архив
            </Link>
            <Link href="/news/" className="hover:text-white">
              Новости
            </Link>
            <Link href="/authors/" className="hover:text-white">
              Авторам
            </Link>
            <Link href="/" className="hover:text-white">
              ↑ наверх
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
