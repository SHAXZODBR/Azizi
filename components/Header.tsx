"use client";

import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div>
      {/* Top thin bar */}
      <div className="bg-[#003366] h-8 flex items-center justify-end px-4 text-xs text-white">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="#" className="hover:text-sky-200">
              🇷🇺 RU
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="#" className="hover:text-sky-200">
              🇬🇧 EN
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="hover:text-sky-200">
              Вход
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/register" className="hover:text-sky-200">
              Регистрация
            </Link>
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
            <Link
              href="/"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              ГЛАВНАЯ
            </Link>

            {/* РЕДАКЦИЯ with Hover Dropdown */}
            <div className="relative group">
              <Link
                href="/editorials/"
                className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488] flex items-center"
              >
                РЕДАКЦИЯ
              </Link>
              <div className="absolute left-0 w-48 bg-[#003366] text-white shadow-lg rounded-md hidden group-hover:block">
                <Link
                  href="/editorials/editorial/"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Редакции
                </Link>
                <Link
                  href="/editorials/collegues/"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Редакционная коллегия
                </Link>
                <Link
                  href="/editorials/contacts/"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Контакты
                </Link>
              </div>
            </div>

            <Link
              href="/archive/"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              АРХИВ
            </Link>
            <Link
              href="/news/"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              НОВОСТИ
            </Link>
            <Link
              href="/ethics/"
              className="px-6 py-3 border-r border-blue-700 hover:bg-[#004488]"
            >
              ЭТИКА
            </Link>

            {/* АВТОРАМ with Hover Dropdown */}
            <div className="relative group">
              <Link
                href="/authors/"
                className="px-6 py-3 hover:bg-[#004488] flex items-center"
              >
                АВТОРАМ
              </Link>
              <div className="absolute left-0 w-60 bg-[#003366] text-white shadow-lg rounded-md hidden group-hover:block">
                <Link
                  href="/authors/rules"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Правила публикации
                </Link>
                <Link
                  href="/authors/preparation"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Подготовка статьи
                </Link>
                <Link
                  href="/authors/review"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Рецензирование
                </Link>
                <Link
                  href="/authors/policy"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Политика журнала
                </Link>
                <Link
                  href="/authors/copyright"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Авторские права
                </Link>
                <Link
                  href="/authors/faq"
                  className="block px-4 py-2 hover:bg-[#004488]"
                >
                  Часто задаваемые вопросы
                </Link>
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
