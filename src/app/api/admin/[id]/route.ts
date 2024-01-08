import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";

export async function PUT(request: NextRequest,{ params }: { params: { id: string } }) {
  const role = await currentRole();

  if (role === UserRole.SUPERADMIN) {
    const UserId = params.id
    const body = await request.json();

    try {
        const UserExit = await prisma?.user.findUnique({
            where:{
                id:UserId
            }
        })

        if(!UserExit){
            return NextResponse.json('User does not exist', {status:400})
        }

        const NewRole = await prisma?.user.update({
            where:{
                id:UserExit.id
            },
            data:{
                role:body.role
            }
        })
        
    } catch (error) {
        console.log('Error while updating role', error)
        return NextResponse.error()
    }

    return new NextResponse(JSON.stringify(body), { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
