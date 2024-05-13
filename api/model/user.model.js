import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export class userModel {
  static getUsuarios = async (_, res) => {
    const usuarios = prisma.user.findMany();
    return usuarios
  }
}