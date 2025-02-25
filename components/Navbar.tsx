import { useState } from "react";

const Navbar = () => {
  const [editorialOpen, setEditorialOpen] = useState(false);
  const [authorsOpen, setAuthorsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#005599] to-[#003366] text-white py-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-normal px-4">
          Вестник Томского государственного университета
        </h1>
        <div className="mt-4 flex flex-wrap gap-0 text-sm relative">
          <a
            href="#"
            className="px-6 py-2 border-r border-blue-700 hover:bg-[#004488]"
          >
            ГЛАВНАЯ
          </a>

          {/* РЕДАКЦИЯ with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setEditorialOpen(!editorialOpen)}
              className="px-6 py-2 border-r border-blue-700 hover:bg-[#004488] focus:outline-none"
            >
              РЕДАКЦИЯ
            </button>
            {editorialOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  О журнале
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Редакционная коллегия
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Контакты
                </a>
              </div>
            )}
          </div>

          <a
            href="#"
            className="px-6 py-2 border-r border-blue-700 hover:bg-[#004488]"
          >
            АРХИВ
          </a>
          <a
            href="#"
            className="px-6 py-2 border-r border-blue-700 hover:bg-[#004488]"
          >
            НОВОСТИ
          </a>
          <a
            href="#"
            className="px-6 py-2 border-r border-blue-700 hover:bg-[#004488]"
          >
            ЭТИКА
          </a>

          {/* АВТОРАМ with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAuthorsOpen(!authorsOpen)}
              className="px-6 py-2 hover:bg-[#004488] focus:outline-none"
            >
              АВТОРАМ
            </button>
            {authorsOpen && (
              <div className="absolute left-0 mt-2 w-60 bg-white text-black shadow-lg rounded-md z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Правила публикации
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Подготовка статьи
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Рецензирование
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Политика журнала
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Авторские права
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Часто задаваемые вопросы
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
