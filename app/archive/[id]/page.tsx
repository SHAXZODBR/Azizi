import { notFound } from "next/navigation";
import Image from "next/image";

interface ArchiveEntry {
  id: string;
  number: number;
  title: string;
  text: string;
  imageUrl?: string;
  pdfUrl?: string;
}

// Mock function - replace with your actual data fetching logic
async function getArchiveEntry(id: string): Promise<ArchiveEntry | null> {
  const mockEntry = {
    id,
    number: Number.parseInt(id),
    title: "Выпуск №" + id,
    text:
      "Это текст выпуска №" +
      id +
      ". Здесь будет содержание выпуска, которое добавляет администратор.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    pdfUrl: "/sample.pdf",
  };
  return mockEntry;
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Await the params object before accessing its properties
  const { id } = await params;
  const entry = await getArchiveEntry(id);

  if (!entry) {
    notFound();
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
          №{entry.number}
        </h1>
        <h2 style={{ fontSize: "20px", fontWeight: "normal" }}>
          {entry.title}
        </h2>
      </div>

      {entry.imageUrl && (
        <div
          style={{
            marginBottom: "20px",
            border: "1px solid #ccc",
            padding: "5px",
          }}
        >
          <div style={{ position: "relative", height: "400px", width: "100%" }}>
            <Image
              src={entry.imageUrl || "/placeholder.svg"}
              alt={entry.title}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}

      <div
        style={{
          marginBottom: "20px",
          lineHeight: "1.5",
          fontSize: "16px",
        }}
      >
        {entry.text}
      </div>

      {entry.pdfUrl && (
        <div style={{ marginTop: "20px" }}>
          <a
            href={entry.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "8px 16px",
              backgroundColor: "#e6e6e6",
              border: "1px solid #ccc",
              textDecoration: "none",
              color: "#333",
              fontSize: "14px",
            }}
          >
            Скачать PDF
          </a>
        </div>
      )}
    </div>
  );
}
