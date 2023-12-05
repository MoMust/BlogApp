import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {

  try {
    const popularPosts = await prisma.post.findMany({
      where: {
        popular: true,
      },
      include: {
        user: true,
      },
    });

    return new NextResponse(JSON.stringify({ popularPosts }, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};
