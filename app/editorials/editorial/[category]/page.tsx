"use client";

import { useParams } from "next/navigation";
import categoryContent from "@/content/categoryData";

export default function EditorialCategory() {
  const params = useParams();
  const rawCategory = params?.category;

  // Ensure category is always a string
  const category = Array.isArray(rawCategory)
    ? rawCategory[0]
    : rawCategory || "";

  const decodedCategory = decodeURIComponent(category);

  // Normalize slug (replace dashes with underscores to match content keys)
  const normalizedCategory = decodedCategory.replace(/-/g, "_");

  console.log("Category from URL:", decodedCategory);
  console.log("Normalized category:", normalizedCategory);
  console.log("Available categories:", Object.keys(categoryContent));

  // Retrieve content safely
  const content = categoryContent[normalizedCategory] || {
    title: "Ошибка",
    description: "Контент не найден",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 m-6 text-xs">
      <h1 className="text-2xl font-bold">{content.title}</h1>
      <p className="mt-4 whitespace-pre-line">{content.description}</p>
    </div>
  );
}
