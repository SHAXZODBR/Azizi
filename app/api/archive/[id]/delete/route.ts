import { type NextRequest, NextResponse } from "next/server";
import { getSession } from "@/app/actions/auth";
import { deleteIssue } from "@/app/actions/archive";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getSession();

  // Check if user is admin
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  await deleteIssue(params.id);

  return NextResponse.redirect(
    new URL("/admin/archive", process.env.NEXT_PUBLIC_APP_URL)
  );
}
