import Link from "next/link"
import { getSession } from "@/app/actions/auth"
import { createIssue } from "@/app/actions/archive"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function NewIssuePage({
  searchParams,
}: {
  searchParams: { year?: string; month?: string }
}) {
  const session = await getSession()

  // Check if user is admin, if not, redirect to login
  if (!session || session.role !== "admin") {
    redirect("/login")
  }

  const year = searchParams.year ? Number.parseInt(searchParams.year) : new Date().getFullYear()
  const month = searchParams.month ? Number.parseInt(searchParams.month) : new Date().getMonth()

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
        <h1 className="text-2xl font-bold mb-6">Добавить новый выпуск</h1>

        <div className="max-w-2xl mx-auto">
          <form action={createIssue} className="space-y-6">
            <input type="hidden" name="month" value={month} />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="year">Год</Label>
                <Input id="year" name="year" type="number" defaultValue={year} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="monthDisplay">Месяц</Label>
                <Input id="monthDisplay" value={months[month]} disabled />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="number">Номер выпуска</Label>
              <Input id="number" name="number" type="number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Статус (оставьте пустым для опубликованного выпуска)</Label>
              <Input id="status" name="status" placeholder="Например: В печати" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pdf">PDF файл выпуска</Label>
              <Input id="pdf" name="pdf" type="file" accept=".pdf" />
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/admin/archive">
                <Button variant="outline">Отмена</Button>
              </Link>
              <Button type="submit">Создать выпуск</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

