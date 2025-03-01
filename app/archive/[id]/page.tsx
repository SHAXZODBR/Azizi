import { FileText } from "lucide-react";
import Link from "next/link";
import { getSession } from "@/app/actions/auth";

// Define interfaces for our article data
interface Article {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  issue: number;
  pages: string;
  doi: string;
}

// Define categories and their articles
interface Category {
  name: string;
  articles: Article[];
}

// Mock data function - in a real app, you would fetch this from an API or database
const getIssueData = (issueId: string) => {
  // Convert to number for comparison with our data
  const issueNumber = Number.parseInt(issueId, 10);

  // Basic issue metadata
  const issueData = {
    number: issueNumber,
    year: issueNumber <= 497 ? 2023 : 2024,
    month: issueNumber % 12 || 12, // 1-12 for months
    downloadCount: Math.floor(Math.random() * 1000) + 100,
  };

  // Generate categories with articles based on the issue number
  const categories: Category[] = [
    {
      name: "ИСТОРИЯ",
      articles: [
        {
          id: `${issueNumber}-1`,
          authors: "Дутчак Е.Е., Болдырева Т.Е.",
          title: "История в пространстве междисциплинарности: взгляд студентов",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "5–14",
          doi: `10.17223/19617793/${issueNumber}/1`,
        },
        {
          id: `${issueNumber}-2`,
          authors: "Горохов С.А., Дмитриев Р.В.",
          title:
            "Международная миграция и формирование албанской диаспоры: от усиления коммунистического режима до Европейского миграционного кризиса",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "15–21",
          doi: `10.17223/19617793/${issueNumber}/2`,
        },
        {
          id: `${issueNumber}-3`,
          authors: "Сазонова Н.В., Долженко В.А.",
          title:
            "Камско-Воткинская газета и сибирское общественное движение колонизаторов и практическое значение (на эпистолярных источниках 1873-1874 гг.)",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "22–29",
          doi: `10.17223/19617793/${issueNumber}/3`,
        },
      ],
    },
    {
      name: "ФИЛОЛОГИЯ",
      articles: [
        {
          id: `${issueNumber}-8`,
          authors: "Буров Э.Е.",
          title:
            "Особенности сочетаемости местоимения что-то с постпозитивными прилагательными в текстах разных стилей",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "68–75",
          doi: `10.17223/19617793/${issueNumber}/8`,
        },
        {
          id: `${issueNumber}-9`,
          authors: "Влавацкая М.В., Родина Д.Г.",
          title:
            "Концептуальные доминанты спортивных неологизмов английского, немецкого и русского языков в медиадискурсе",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "76–87",
          doi: `10.17223/19617793/${issueNumber}/9`,
        },
      ],
    },
    {
      name: "ФИЛОСОФИЯ",
      articles: [
        {
          id: `${issueNumber}-14`,
          authors: "Палешенко А.В.",
          title:
            "«Dasein» или «поток переживаний»: онтологические основания человека через призму феноменологического и психоаналитического подходов",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "130–136",
          doi: `10.17223/19617793/${issueNumber}/14`,
        },
      ],
    },
    {
      name: "СОЦИОЛОГИЯ И ПОЛИТОЛОГИЯ",
      articles: [
        {
          id: `${issueNumber}-15`,
          authors: "Брагина Д.Е., Степанов Ф.А., Волошин А.А., Самарин А.С.",
          title:
            "Внутрирегиональная и межрегиональная миграция населения Сибири: сравнительный анализ Иркутской, Томской областей и Красноярского края",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "137–149",
          doi: `10.17223/19617793/${issueNumber}/15`,
        },
      ],
    },
    {
      name: "ПЕДАГОГИКА",
      articles: [
        {
          id: `${issueNumber}-17`,
          authors: "Глухова Е.П., Морозова М.А.",
          title:
            "Принципы непрерывного обучения иностранному языку будущих инженеров в вузе",
          journal: "Вестник Томского государственного университета",
          year: issueData.year,
          issue: issueNumber,
          pages: "159–166",
          doi: `10.17223/19617793/${issueNumber}/17`,
        },
      ],
    },
  ];

  return { issueData, categories };
};

// Get month name in Russian
const getMonthName = (monthNumber: number) => {
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  return months[monthNumber - 1];
};

export default async function IssuePage({
  params,
}: {
  params: { id: string };
}) {
  const { issueData, categories } = getIssueData(params.id);
  const monthName = getMonthName(issueData.month);
  const session = await getSession();
  const isAdmin = session?.role === "admin";

  return (
    <div className="max-w-7xl mx-auto p-4 font-serif">
      <div className="flex justify-between items-center mb-6">
        <Link href="/archive" className="text-blue-600 hover:underline">
          ← Вернуться к архиву
        </Link>
        {isAdmin && (
          <div className="flex gap-2">
            <Link href={`/admin/archive/${params.id}/edit`}>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">
                Редактировать выпуск
              </button>
            </Link>
            <Link href={`/admin/archive/${params.id}/articles/new`}>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">
                Добавить статью
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {categories.map((category) => (
            <div key={category.name} className="mb-8">
              <h2 className="font-bold text-lg mb-4">{category.name}</h2>

              <div className="space-y-4 text-sm">
                {category.articles.map((article) => (
                  <div key={article.id} className="flex justify-between">
                    <p>
                      <span className="font-semibold">{article.authors}</span>{" "}
                      {article.title} //
                      {article.journal}. {article.year}. № {article.issue}. С.{" "}
                      {article.pages}. doi: {article.doi}
                    </p>
                    {isAdmin && (
                      <div className="flex gap-2 ml-4 shrink-0">
                        <Link
                          href={`/admin/archive/${params.id}/articles/${article.id}/edit`}
                        >
                          <button className="px-2 py-1 text-xs border border-blue-600 text-blue-600 rounded">
                            Изменить
                          </button>
                        </Link>
                        <form
                          action={`/api/archive/${params.id}/articles/${article.id}/delete`}
                          method="POST"
                        >
                          <button className="px-2 py-1 text-xs border border-red-600 text-red-600 rounded">
                            Удалить
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-blue-900 text-white p-4 rounded-t-md">
            <div className="text-xs text-right mb-2">ISSN 1561-7793</div>
            <h1 className="text-center font-bold text-lg">
              ВЕСТНИК
              <br />
              ТОМСКОГО ГОСУДАРСТВЕННОГО
              <br />
              УНИВЕРСИТЕТА
            </h1>
            <div className="flex justify-between mt-4 text-xs">
              <div>{issueData.year}</div>
              <div>№ {issueData.number}</div>
              <div>{monthName.toUpperCase()}</div>
            </div>
          </div>

          <div className="bg-blue-800 text-white p-4 text-xs">
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-1">
                <li>• ИСТОРИЯ</li>
                <li>• ФИЛОСОФИЯ</li>
                <li>• ФИЛОЛОГИЯ</li>
                <li>• СОЦИОЛОГИЯ</li>
                <li>• ПОЛИТОЛОГИЯ</li>
                <li>• ПЕДАГОГИКА</li>
                <li>• ПРАВО</li>
              </ul>
              <ul className="space-y-1">
                <li>• HISTORY</li>
                <li>• PHILOSOPHY</li>
                <li>• PHILOLOGY</li>
                <li>• SOCIOLOGY</li>
                <li>• POLITICAL SCIENCE</li>
                <li>• PEDAGOGICS</li>
                <li>• LAW</li>
              </ul>
            </div>

            <div className="text-center mt-6 font-bold">
              TOMSK STATE UNIVERSITY
              <br />
              JOURNAL
            </div>
          </div>

          <div className="border p-4 mt-6">
            <h2 className="font-bold mb-4">
              Вестн. Том. гос. ун-та. {issueData.year}. № {issueData.number}.
            </h2>

            <div className="flex items-center mt-4 text-red-600">
              <FileText className="w-5 h-5 mr-2" />
              <a href="#" className="text-sm">
                Скачать полнотекстовую версию
              </a>
            </div>

            <div className="text-xs mt-4 text-gray-600">
              Загружен, раз: {issueData.downloadCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
