import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export class postPageModel {
  static getPostPage = async (id) => {

    const pagePost = prisma.post.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        content: true,
        createdAt: true,
        author: {
          select: {
            id: true,
            nome: true,
            bio: true
          }
        }
      }
    })
    return pagePost
  }
}
