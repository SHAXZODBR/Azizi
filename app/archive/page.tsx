import Link from "next/link";
import { getSession } from "@/app/actions/auth";

// This represents the data structure for each archive entry
interface ArchiveEntry {
  id: string;
  number: number;
  status?: string;
  content?: string;
  imageUrl?: string;
  pdfUrl?: string;
}

// Define a proper type for the entries object
interface EntriesMap {
  [key: number]: ArchiveEntry | undefined;
}

interface YearData {
  year: number;
  entries: EntriesMap;
}

// Mock data structure - replace with your actual data fetching logic
const getArchiveData = async (): Promise<YearData[]> => {
  // In a real implementation, this would come from your database
  return [
    {
      year: 2025,
      entries: {
        0: { id: "510", number: 510, status: "В печати" },
      },
    },
    {
      year: 2024,
      entries: {
        0: { id: "498", number: 498 },
        1: { id: "499", number: 499 },
        2: { id: "500", number: 500 },
        3: { id: "501", number: 501 },
        4: { id: "502", number: 502 },
        5: { id: "503", number: 503 },
        6: { id: "504", number: 504 },
        7: { id: "505", number: 505 },
        8: { id: "506", number: 506 },
        9: { id: "507", number: 507 },
        10: { id: "508", number: 508 },
        11: { id: "509", number: 509 },
      },
    },
    {
      year: 2023,
      entries: {
        0: { id: "486", number: 486 },
        1: { id: "487", number: 487 },
        2: { id: "488", number: 488 },
        3: { id: "489", number: 489 },
        4: { id: "490", number: 490 },
        5: { id: "491", number: 491 },
        6: { id: "492", number: 492 },
        7: { id: "493", number: 493 },
        8: { id: "494", number: 494 },
        9: { id: "495", number: 495 },
        10: { id: "496", number: 496 },
        11: { id: "497", number: 497 },
      },
    },
    {
      year: 2022,
      entries: {
        0: { id: "474", number: 474 },
        1: { id: "475", number: 475 },
        2: { id: "476", number: 476 },
        3: { id: "477", number: 477 },
        4: { id: "478", number: 478 },
        5: { id: "479", number: 479 },
        6: { id: "480", number: 480 },
        7: { id: "481", number: 481 },
        8: { id: "482", number: 482 },
        9: { id: "483", number: 483 },
        10: { id: "484", number: 484 },
        11: { id: "485", number: 485 },
      },
    },
    {
      year: 2021,
      entries: {
        0: { id: "462", number: 462 },
        1: { id: "463", number: 463 },
        2: { id: "464", number: 464 },
        3: { id: "465", number: 465 },
        4: { id: "466", number: 466 },
        5: { id: "467", number: 467 },
        6: { id: "468", number: 468 },
        7: { id: "469", number: 469 },
        8: { id: "470", number: 470 },
        9: { id: "471", number: 471 },
        10: { id: "472", number: 472 },
        11: { id: "473", number: 473 },
      },
    },
    {
      year: 2020,
      entries: {
        0: { id: "450", number: 450 },
        1: { id: "451", number: 451 },
        2: { id: "452", number: 452 },
        3: { id: "453", number: 453 },
        4: { id: "454", number: 454 },
        5: { id: "455", number: 455 },
        6: { id: "456", number: 456 },
        7: { id: "457", number: 457 },
        8: { id: "458", number: 458 },
        9: { id: "459", number: 459 },
        10: { id: "460", number: 460 },
        11: { id: "461", number: 461 },
      },
    },
    {
      year: 2019,
      entries: {
        0: { id: "438", number: 438 },
        1: { id: "439", number: 439 },
        2: { id: "440", number: 440 },
        3: { id: "441", number: 441 },
        4: { id: "442", number: 442 },
        5: { id: "443", number: 443 },
        6: { id: "444", number: 444 },
        7: { id: "445", number: 445 },
        8: { id: "446", number: 446 },
        9: { id: "447", number: 447 },
        10: { id: "448", number: 448 },
        11: { id: "449", number: 449 },
      },
    },
    {
      year: 2018,
      entries: {
        0: { id: "426", number: 426 },
        1: { id: "427", number: 427 },
        2: { id: "428", number: 428 },
        3: { id: "429", number: 429 },
        4: { id: "430", number: 430 },
        5: { id: "431", number: 431 },
        6: { id: "432", number: 432 },
        7: { id: "433", number: 433 },
        8: { id: "434", number: 434 },
        9: { id: "435", number: 435 },
        10: { id: "436", number: 436 },
        11: { id: "437", number: 437 },
      },
    },
    {
      year: 2017,
      entries: {
        0: { id: "414", number: 414 },
        1: { id: "415", number: 415 },
        2: { id: "416", number: 416 },
        3: { id: "417", number: 417 },
        4: { id: "418", number: 418 },
        5: { id: "419", number: 419 },
        6: { id: "420", number: 420 },
        7: { id: "421", number: 421 },
        8: { id: "422", number: 422 },
        9: { id: "423", number: 423 },
        10: { id: "424", number: 424 },
        11: { id: "425", number: 425 },
      },
    },
    {
      year: 2016,
      entries: {
        0: { id: "402", number: 402 },
        1: { id: "403", number: 403 },
        2: { id: "404", number: 404 },
        3: { id: "405", number: 405 },
        4: { id: "406", number: 406 },
        5: { id: "407", number: 407 },
        6: { id: "408", number: 408 },
        7: { id: "409", number: 409 },
        8: { id: "410", number: 410 },
        9: { id: "411", number: 411 },
        10: { id: "412", number: 412 },
        11: { id: "413", number: 413 },
      },
    },
    {
      year: 2015,
      entries: {
        0: { id: "390", number: 390 },
        1: { id: "391", number: 391 },
        2: { id: "392", number: 392 },
        3: { id: "393", number: 393 },
        4: { id: "394", number: 394 },
        5: { id: "395", number: 395 },
        6: { id: "396", number: 396 },
        7: { id: "397", number: 397 },
        8: { id: "398", number: 398 },
        9: { id: "399", number: 399 },
        10: { id: "400", number: 400 },
        11: { id: "401", number: 401 },
      },
    },
    {
      year: 2014,
      entries: {
        0: { id: "378", number: 378 },
        1: { id: "379", number: 379 },
        2: { id: "380", number: 380 },
        3: { id: "381", number: 381 },
        4: { id: "382", number: 382 },
        5: { id: "383", number: 383 },
        6: { id: "384", number: 384 },
        7: { id: "385", number: 385 },
        8: { id: "386", number: 386 },
        9: { id: "387", number: 387 },
        10: { id: "388", number: 388 },
        11: { id: "389", number: 389 },
      },
    },
    {
      year: 2013,
      entries: {
        0: { id: "366", number: 366 },
        1: { id: "367", number: 367 },
        2: { id: "368", number: 368 },
        3: { id: "369", number: 369 },
        4: { id: "370", number: 370 },
        5: { id: "371", number: 371 },
        6: { id: "372", number: 372 },
        7: { id: "373", number: 373 },
        8: { id: "374", number: 374 },
        9: { id: "375", number: 375 },
        10: { id: "376", number: 376 },
        11: { id: "377", number: 377 },
      },
    },
  ];
};

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
];

export default async function ArchivePage() {
  const archiveData = await getArchiveData();
  const session = await getSession();
  const isAdmin = session?.role === "admin";

  return (
    <div className="min-h-screen flex flex-col">
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          padding: "0",
          margin: "50px",
        }}
      >
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            border: "1px solid #ccc",
          }}
        >
          <thead>
            <tr>
              <td
                style={{
                  padding: "38px",
                  backgroundColor: "#e6e6e6",
                  border: "1px solid #ccc",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              ></td>
              {months.map((month) => (
                <td
                  key={month}
                  style={{
                    padding: "8px",
                    backgroundColor: "#e6e6e6",
                    border: "1px solid #ccc",
                    fontWeight: "normal",
                    textAlign: "center",
                    minWidth: "100px",
                  }}
                >
                  {month}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {archiveData.map((yearData) => (
              <tr key={yearData.year}>
                <td
                  style={{
                    padding: "12px",
                    backgroundColor: "#e6e6e6",
                    border: "1px solid #ccc",
                    textAlign: "left",
                  }}
                >
                  {yearData.year} год
                </td>
                {months.map((_, monthIndex) => {
                  const entry = yearData.entries[monthIndex];
                  return (
                    <td
                      key={monthIndex}
                      style={{
                        padding: "8px",
                        border: "1px solid #ccc",
                        textAlign: "center",
                        backgroundColor: "#f9f9f9",
                      }}
                    >
                      {entry ? (
                        entry.status ? (
                          <span style={{ color: "#666", fontSize: "14px" }}>
                            {entry.status}
                          </span>
                        ) : (
                          <Link
                            href={`/archive/${entry.id}`}
                            style={{
                              color: "#0066cc",
                              textDecoration: "none",
                              fontSize: "14px",
                            }}
                          >
                            №{entry.number}
                          </Link>
                        )
                      ) : isAdmin ? (
                        <Link
                          href={`/admin/archive/new?year=${yearData.year}&month=${monthIndex}`}
                          style={{
                            color: "#999",
                            textDecoration: "none",
                            fontSize: "14px",
                          }}
                        >
                          + Добавить
                        </Link>
                      ) : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
