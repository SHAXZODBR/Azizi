import Link from "next/link"
import { getSession } from "@/app/actions/auth"
import { createYear } from "@/app/actions/archive"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function NewYearPage() {
  const session = await getSession()

  // Check if user is admin, if not, redirect to login
  if (!session || session.role !== "admin") {
    redirect("/login")
  }

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
        <h1 className="text-2xl font-bold mb-6">Добавить новый год</h1>

        <div className="max-w-md mx-auto">
          <form action={createYear} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="year">Год</Label>
              <Input id="year" name="year" type="number" defaultValue={new Date().getFullYear() + 1} required />
            </div>

            <div className="flex justify-end gap-4">
              <Link href="/admin/archive">
                <Button variant="outline">Отмена</Button>
              </Link>
              <Button type="submit">Создать год</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

