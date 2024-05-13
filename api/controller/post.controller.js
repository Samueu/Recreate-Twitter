import { postModel } from "../model/post.model.js";

export class postController {
  static getPosts = async (_, res) => {
    const posts = await postModel.getPosts();

    return res.status(201).json(posts);
  }
}