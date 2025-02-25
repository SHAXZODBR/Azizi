import { authorContent } from "@/content/authors";

export default async function AuthorDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params; // Ensure `params` is awaited

  const pageData = authorContent[slug];

  if (!pageData) {
    return (
      <p className="text-red-500 text-center mt-10">Страница не найдена</p>
    );
  }

  return (
    <div className="m-8">
      <main className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold">{pageData.title}</h1>
        <p className="mt-4 whitespace-pre-line text-sm">{pageData.text}</p>
      </main>
    </div>
  );
}
