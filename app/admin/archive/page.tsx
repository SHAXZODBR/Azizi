import Link from "next/link"
import { getSession } from "@/app/actions/auth"
import { redirect } from "next/navigation"

// This represents the data structure for each archive entry
interface ArchiveEntry {
  id: string
  number: number
  status?: string
  content?: string
  imageUrl?: string
  pdfUrl?: string
}

// Define a proper type for the entries object
interface EntriesMap {
  [key: number]: ArchiveEntry | undefined
}

interface YearData {
  year: number
  entries: EntriesMap
}

// Mock data structure - replace with your actual data fetching logic
const getArchiveData = async (): Promise<YearData[]> => {
  // In a real implementation, this would come from your database
  return [
    {
      year: 2025,
      entries: {
        0: { id: "510", number: 510, status: "В печати" },
      },
    },
    {
      year: 2024,
      entries: {
        0: { id: "498", number: 498 },
        1: { id: "499", number: 499 },
        2: { id: "500", number: 500 },
        3: { id: "501", number: 501 },
        4: { id: "502", number: 502 },
        5: { id: "503", number: 503 },
        6: { id: "504", number: 504 },
        7: { id: "505", number: 505 },
        8: { id: "506", number: 506 },
        9: { id: "507", number: 507 },
        10: { id: "508", number: 508 },
        11: { id: "509", number: 509 },
      },
    },
    {
      year: 2023,
      entries: {
        0: { id: "486", number: 486 },
        1: { id: "487", number: 487 },
        2: { id: "488", number: 488 },
        3: { id: "489", number: 489 },
        4: { id: "490", number: 490 },
        5: { id: "491", number: 491 },
        6: { id: "492", number: 492 },
        7: { id: "493", number: 493 },
        8: { id: "494", number: 494 },
        9: { id: "495", number: 495 },
        10: { id: "496", number: 496 },
        11: { id: "497", number: 497 },
      },
    },
  ]
}

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
]

export default async function AdminArchivePage() {
  const session = await getSession()

  // Check if user is admin, if not, redirect to login
  if (!session || session.role !== "admin") {
    redirect("/login")
  }

  const archiveData = await getArchiveData()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Панель администратора</div>
          <nav className="flex gap-4">
            <Link href="/archive">
              <button className="px-4 py-2 border rounded">Просмотр архива</button>
            </Link>
            <form action="/api/logout" method="POST">
              <button className="px-4 py-2 border rounded">Выйти</button>
            </form>
          </nav>
        </div>
      </header>

      <div className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Управление архивом</h1>
          <Link href="/admin/archive/new-year">
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Добавить новый год</button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 bg-gray-100">Год</th>
                {months.map((month) => (
                  <th key={month} className="border p-2 bg-gray-100">
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {archiveData.map((yearData) => (
                <tr key={yearData.year}>
                  <td className="border p-2 font-bold">{yearData.year}</td>
                  {months.map((_, monthIndex) => {
                    const entry = yearData.entries[monthIndex]
                    return (
                      <td key={monthIndex} className="border p-2 text-center">
                        {entry ? (
                          <div className="flex flex-col items-center gap-1">
                            <div>
                              {entry.status ? (
                                <span className="text-gray-600">{entry.status}</span>
                              ) : (
                                <Link href={`/archive/${entry.id}`} className="text-blue-600 hover:underline">
                                  №{entry.number}
                                </Link>
                              )}
                            </div>
                            <div className="flex gap-1">
                              <Link href={`/admin/archive/${entry.id}/edit`}>
                                <button className="px-2 py-1 text-xs border border-blue-600 text-blue-600 rounded">
                                  Изменить
                                </button>
                              </Link>
                              <form action={`/api/archive/${entry.id}/delete`} method="POST">
                                <button className="px-2 py-1 text-xs border border-red-600 text-red-600 rounded">
                                  Удалить
                                </button>
                              </form>
                            </div>
                          </div>
                        ) : (
                          <Link href={`/admin/archive/new?year=${yearData.year}&month=${monthIndex}`}>
                            <button className="px-2 py-1 text-xs border border-green-600 text-green-600 rounded">
                              + Добавить
                            </button>
                          </Link>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

