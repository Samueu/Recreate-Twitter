import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class postModel {
  static getPosts = async (_, res) => {
    const posts = prisma.post.findMany({
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
    });
    return posts
  }
}