import Link from "next/link"
import { getSession } from "@/app/actions/auth"
import { createArticle } from "@/app/actions/archive"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Mock function to get issue data
const getIssueData = (id: string) => {
  const issueNumber = Number.parseInt(id, 10)

  return {
    id,
    number: issueNumber,
    year: issueNumber <= 497 ? 2023 : 2024,
    month: issueNumber % 12 || 12,
  }
}

export default async function NewArticlePage({ params }: { params: { id: string } }) {
  const session = await getSession()

  // Check if user is admin, if not, redirect to login
  if (!session || session.role !== "admin") {
    redirect("/login")
  }

  const issue = getIssueData(params.id)

  const categories = [
    "ИСТОРИЯ",
    "ФИЛОЛОГИЯ",
    "ФИЛОСОФИЯ",
    "СОЦИОЛОГИЯ И ПОЛИТОЛОГИЯ",
    "ПЕДАГОГИКА",
    "ПРАВО",
    "ЭКОНОМИКА",
    "ПСИХОЛОГИЯ",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Панель администратора</div>
          <nav className="flex gap-4">
            <Link href={`/archive/${params.id}`}>
              <button className="px-4 py-2 border rounded">Назад к выпуску</button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-6">Добавить статью в выпуск №{issue.number}</h1>

        <div className="max-w-2xl mx-auto">
          <form action={createArticle} className="space-y-6">
            <input type="hidden" name="issueId" value={issue.id} />

            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <select id="category" name="category" className="w-full p-2 border rounded" required>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="authors">Авторы</Label>
              <Input id="authors" name="authors" placeholder="Иванов И.И., Петров П.П." required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Название статьи</Label>
              <Textarea id="title" name="title" rows={2} required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pages">Страницы</Label>
                <Input id="pages" name="pages" placeholder="5-14" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="articleNumber">Номер статьи</Label>
                <Input id="articleNumber" name="articleNumber" type="number" placeholder="1" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pdf">PDF файл статьи</Label>
              <Input id="pdf" name="pdf" type="file" accept=".pdf" />
            </div>

            <div className="flex justify-end gap-4">
              <Link href={`/archive/${params.id}`}>
                <Button variant="outline">Отмена</Button>
              </Link>
              <Button type="submit">Добавить статью</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

