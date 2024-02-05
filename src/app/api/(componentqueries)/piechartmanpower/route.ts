import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const Date = searchParams.get('Date');
    const group = searchParams.get('group')
    console.log(Date)

    if (!Date) {
        // Return a 400 Bad Request status code since Date is missing
        return NextResponse.error();
    }

    const month = Date.split('-')[0]
    const year = Date.split('-')[1]

    try {
        const bymonthmanpower = await prisma.resourceData.groupBy({
            by: ['category'],
            _sum: {
                Nos: true
            },
            where: {
                Month: month,
                Year: parseInt(year),
                Group: group
            }
        })

        // Return a 200 OK status code along with the data
        return NextResponse.json(bymonthmanpower, { status: 200 });
    } catch (error) {
        console.error("Error fetching manpowedata data:", error);
        // Return a 500 Internal Server Error status code for other errors
        return NextResponse.error();
    }
}
