import { use } from "react";
import { authorContent } from "@/content/authors";

type AuthorKeys = keyof typeof authorContent;

export default function AuthorDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params); // Use `use()` to unwrap the Promise

  console.log("Params received:", slug); // Debugging log

  const pageData = authorContent[slug as AuthorKeys];

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
