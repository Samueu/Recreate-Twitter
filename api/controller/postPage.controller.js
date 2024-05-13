import { postPageModel } from "../model/postPage.model.js";

export class postPageController {
  static getPostPage = async (req, res) => {
    const posts = await postPageModel.getPostPage(req.params.id);

    return res.status(201).json(posts)
  }
}