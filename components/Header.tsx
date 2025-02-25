"use client";

import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      {/* Top thin bar */}
      <div className="bg-[#003366] h-8 flex items-center justify-end px-4 text-xs text-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="#" className="hover:text-sky-200">
              🇷🇺 RU
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-sky-200">
              🇬🇧 EN
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:text-sky-200">
              Вход
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-sky-200">
              Регистрация
            </a>
          </div>
        </div>
      </div>

      {/* Main blue header */}
      <div className="bg-gradient-to-b from-[#005599] to-[#003366] text-white py-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-normal px-4">
            Вестник Томского государственного университета
          </h1>
          <div className="mt-4 flex flex-wrap gap-0 text-sm">
            <a
              href="/"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              ГЛАВНАЯ
            </a>

            {/* РЕДАКЦИЯ with Hover Dropdown */}
            <div className="relative group">
              <a
                href="/editorials/"
                className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488] flex items-center"
              >
                РЕДАКЦИЯ
              </a>
              <div className="absolute left-0 w-48 bg-[#003366] text-white shadow-lg rounded-md hidden group-hover:block">
                <a
                  href="/editorials/editorial/"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Редакции
                </a>
                <a
                  href="/editorials/collegues/"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Редакционная коллегия
                </a>
                <a
                  href="/editorials/contacts/"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Контакты
                </a>
              </div>
            </div>

            <a
              href="#"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              АРХИВ
            </a>
            <a
              href="#"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              НОВОСТИ
            </a>
            <a
              href="/ethics/"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              ЭТИКА
            </a>

            {/* АВТОРАМ with Hover Dropdown */}
            <div className="relative group">
              <a
                href="/authors/"
                className="px-6 py-3 hover:bg-[#004488] flex items-center"
              >
                АВТОРАМ
              </a>
              <div className="absolute left-0 w-60 bg-[#003366] text-white shadow-lg rounded-md hidden group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-[#004488]">
                  Правила публикации
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#004488]">
                  Подготовка статьи
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#004488]">
                  Рецензирование
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#004488]">
                  Политика журнала
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#004488]">
                  Авторские права
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-[#004488]">
                  Часто задаваемые вопросы
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-[#003366] border-y border-blue-900">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          <h2 className="text-white text-lg">
            Вестник Томского государственного университета
          </h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Поиск"
              className="px-2 py-1 text-sm w-32 bg-blue-600 text-white"
            />
            <Button
              variant="secondary"
              size="sm"
              className="h-7 bg-blue-600 text-white"
            >
              Поиск
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
