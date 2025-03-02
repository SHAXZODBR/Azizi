import { getSession } from "@/app/actions/auth";
import { updateArticle } from "@/app/actions/archive";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Define the params type
type EditArticleParams = {
  id: string;
  articleId: string;
};

// Use type assertion to handle the Promise constraint
export default async function EditArticlePage({
  params,
}: {
  params: EditArticleParams;
}) {
  // Cast params if needed
  const { id, articleId } = params as EditArticleParams;

  const session = await getSession();

  if (!session || session.role !== "admin") {
    redirect("/login");
  }

  const issue = getIssueData(id);
  const article = getArticleData(id, articleId);

  const categories = [
    "ИСТОРИЯ",
    "ФИЛОЛОГИЯ",
    "ФИЛОСОФИЯ",
    "СОЦИОЛОГИЯ И ПОЛИТОЛОГИЯ",
    "ПЕДАГОГИКА",
    "ПРАВО",
    "ЭКОНОМИКА",
    "ПСИХОЛОГИЯ",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="text-xl font-bold">Панель администратора</div>
          <nav className="flex gap-4">
            <Link href={`/archive/${id}`}>
              <button className="px-4 py-2 border rounded">
                Назад к выпуску
              </button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-6">
          Редактировать статью в выпуске №{issue.number}
        </h1>

        <div className="max-w-2xl mx-auto">
          <form action={updateArticle} className="space-y-6">
            <input type="hidden" name="issueId" value={issue.id} />
            <input type="hidden" name="articleId" value={article.id} />

            <div className="space-y-2">
              <Label htmlFor="category">Категория</Label>
              <select
                id="category"
                name="category"
                className="w-full p-2 border rounded"
                defaultValue={article.category}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="authors">Авторы</Label>
              <Input
                id="authors"
                name="authors"
                defaultValue={article.authors}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Название статьи</Label>
              <Textarea
                id="title"
                name="title"
                defaultValue={article.title}
                rows={2}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pages">Страницы</Label>
                <Input
                  id="pages"
                  name="pages"
                  defaultValue={article.pages}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="articleNumber">Номер статьи</Label>
                <Input
                  id="articleNumber"
                  name="articleNumber"
                  type="number"
                  defaultValue={article.articleNumber}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pdf">
                PDF файл статьи (оставьте пустым, чтобы сохранить текущий)
              </Label>
              <Input id="pdf" name="pdf" type="file" accept=".pdf" />
              {article.pdfUrl && (
                <p className="text-sm text-gray-500">
                  Текущий файл: {article.pdfUrl.split("/").pop()}
                </p>
              )}
            </div>

            <div className="flex justify-end gap-4">
              <Link href={`/archive/${id}`}>
                <Button variant="outline">Отмена</Button>
              </Link>
              <Button type="submit">Сохранить изменения</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Helper function for issue data
function getIssueData(id: string) {
  const issueNumber = Number.parseInt(id, 10);
  return {
    id,
    number: issueNumber,
    year: issueNumber <= 497 ? 2023 : 2024,
    month: issueNumber % 12 || 12,
  };
}

// Helper function for article data
function getArticleData(issueId: string, articleId: string) {
  const articleNumber = Number.parseInt(articleId.split("-")[1], 10);
  return {
    id: articleId,
    category:
      articleNumber <= 3
        ? "ИСТОРИЯ"
        : articleNumber <= 9
        ? "ФИЛОЛОГИЯ"
        : articleNumber <= 14
        ? "ФИЛОСОФИЯ"
        : articleNumber <= 16
        ? "СОЦИОЛОГИЯ И ПОЛИТОЛОГИЯ"
        : "ПЕДАГОГИКА",
    authors: "Иванов И.И., Петров П.П.",
    title: "Название статьи для редактирования",
    pages: `${articleNumber * 5}-${articleNumber * 5 + 9}`,
    articleNumber: articleNumber,
    pdfUrl: "/sample-article.pdf",
  };
}
