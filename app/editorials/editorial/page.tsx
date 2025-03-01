import Link from "next/link";

const categories = [
  { name: "История", slug: "history" },
  { name: "Педагогика (общая)", slug: "pedagogy-general" },
  { name: "Педагогика (преподавание языков)", slug: "pedagogy-languages" },
  { name: "Педагогика (физическая культура)", slug: "pedagogy-sport" },
  { name: "Право", slug: "law" },
  { name: "Социология и политология", slug: "sociology-politics" },
  { name: "Филология", slug: "philology" },
  { name: "Философия", slug: "philosophy" },
];

export default function CategoryList() {
  return (
    <div className="w-full max-w-6xl mx-auto m-12 p-4">
      <div className="bg-white border border-gray-300">
        <div className="bg-[#F5F5F5] px-4 py-2 border-b">
          <span className="text-[#666666]">Редакция</span>
        </div>
        <div className="px-4 py-2">
          <div className="space-y-1.5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/editorials/editorial/${category.slug}`}
                className="block text-[#0066CC] text-sm no-underline"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <div className="text-[#666666] mt-4 text-sm">
            Всего: {categories.length}
          </div>
        </div>
      </div>
    </div>
  );
}
