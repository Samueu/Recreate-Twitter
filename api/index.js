import { AddUser } from "./controller/addUser.js";
import { controllerPost } from "./controller/addPost.js";
import { controllerProfile } from "./controller/addProfile.js";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const novoUsuario = async () => {
  await AddUser({
    email: 'testeemail@gmail.com',
    nome: 'Samuel'
  })
}

// ; (async () => {
//   const novoPost = await controllerPost({
//     title: 'Oasis',
//     content: 'oasis e muito foda!!!',
//     authorId: 12
//   })
// })()


const newProfile = async () => {
  await controllerProfile({
    bio: "um teste a mais!",
    userId: 5
  })
}


const addUser = async (data) => {
  const user = await prisma.post.create({
    data: {
      title: "titulo",
      content: "conteudo do post!",
      published: true,
      authorId: 1
    }
  });
}

addUser();