import { type NextRequest, NextResponse } from "next/server";
import { getSession } from "@/app/actions/auth";
import { deleteArticle } from "@/app/actions/archive";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string; articleId: string } }
) {
  const session = await getSession();

  // Check if user is admin
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await deleteArticle(params.id, params.articleId);

  return NextResponse.redirect(
    new URL(`/archive/${params.id}`, process.env.NEXT_PUBLIC_APP_URL)
  );
}
