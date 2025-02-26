"use client";

import type React from "react";

import { useState } from "react";

export default function AdminArchivePage() {
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [pdf, setPdf] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your form submission logic here
    // You'll want to use FormData to handle file uploads
    console.log("Form submitted", {
      year,
      month,
      number,
      title,
      text,
      file,
      pdf,
    });

    // In a real implementation, you would send this data to your API
    alert("Entry saved successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Добавить выпуск в архив
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "block" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "8px", width: "150px" }}>
                <label htmlFor="year">Год:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <select
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Выберите год</option>
                  {Array.from({ length: 13 }, (_, i) => 2013 + i).map((y) => (
                    <option key={y} value={y.toString()}>
                      {y}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <label htmlFor="month">Месяц:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <select
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "6px",
                    border: "1px solid #ccc",
                  }}
                >
                  <option value="">Выберите месяц</option>
                  {[
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
                  ].map((m, i) => (
                    <option key={m} value={(i + 1).toString()}>
                      {m}
                    </option>
                  ))}
                </select>
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <label htmlFor="number">Номер:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  id="number"
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Введите номер выпуска"
                  style={{
                    width: "100%",
                    padding: "6px",
                    border: "1px solid #ccc",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <label htmlFor="title">Заголовок:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите заголовок"
                  style={{
                    width: "100%",
                    padding: "6px",
                    border: "1px solid #ccc",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px", verticalAlign: "top" }}>
                <label htmlFor="text">Текст:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Введите текст выпуска"
                  rows={10}
                  style={{
                    width: "100%",
                    padding: "6px",
                    border: "1px solid #ccc",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <label htmlFor="image">Изображение:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  style={{
                    width: "100%",
                    padding: "6px",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td style={{ padding: "8px" }}>
                <label htmlFor="pdf">PDF документ:</label>
              </td>
              <td style={{ padding: "8px" }}>
                <input
                  id="pdf"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setPdf(e.target.files?.[0] || null)}
                  style={{
                    width: "100%",
                    padding: "6px",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td colSpan={2} style={{ padding: "16px 8px 8px" }}>
                <button
                  type="submit"
                  style={{
                    padding: "8px 16px",
                    backgroundColor: "#e6e6e6",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Сохранить
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
