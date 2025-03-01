import Link from "next/link"
import { getSession } from "@/app/actions/auth"
import { updateIssue } from "@/app/actions/archive"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Mock function to get issue data
const getIssueData = (id: string) => {
  const issueNumber = Number.parseInt(id, 10)

  return {
    id,
    number: issueNumber,
    year: issueNumber <= 497 ? 2023 : 2024,
    month: issueNumber % 12 || 12,
    status: issueNumber === 510 ? "В печати" : "",
    pdfUrl: "/sample.pdf",
  }
}

export default async function EditIssuePage({ params }: { params: { id: string } }) {
  const session = await getSession()

  // Check if user is admin, if not, redirect to login
  if (!session || session.role !== "admin") {
    redirect("/login")
  }

  const issue = getIssueData(params.id)

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

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Панель администратора</div>
          <nav className="flex gap-4">
            <Link href="/admin/archive">
              <button className="px-4 py-2 border rounded">Назад к архиву</button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-6">Редактировать выпуск №{issue.number}</h1>

        <div className="max-w-2xl mx-auto">
          <form action={updateIssue} className="space-y-6">
            <input type="hidden" name="id" value={issue.id} />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Год</Label>
                <Input id="year" name="year" type="number" defaultValue={issue.year} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="month">Месяц</Label>
                <select id="month" name="month" className="w-full p-2 border rounded" defaultValue={issue.month - 1}>
                  {months.map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="number">Номер выпуска</Label>
              <Input id="number" name="number" type="number" defaultValue={issue.number} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Статус (оставьте пустым для опубликованного выпуска)</Label>
              <Input id="status" name="status" defaultValue={issue.status} placeholder="Например: В печати" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pdf">PDF файл выпуска (оставьте пустым, чтобы сохранить текущий)</Label>
              <Input id="pdf" name="pdf" type="file" accept=".pdf" />
              {issue.pdfUrl && <p className="text-sm text-gray-500">Текущий файл: {issue.pdfUrl.split("/").pop()}</p>}
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/admin/archive">
                <Button variant="outline">Отмена</Button>
              </Link>
              <Button type="submit">Сохранить изменения</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

