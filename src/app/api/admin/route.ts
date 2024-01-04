import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";

export async function GET() {
  const role = await currentRole();
  const User = await currentUser()

  if (role === UserRole.ADMIN) {
    const users = await prisma?.user.findMany({
      where: {
        id: {
          not: User?.id
        },
      },
    });
    return new NextResponse(JSON.stringify(users), { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
