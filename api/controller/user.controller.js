import { userModel } from "../model/user.model.js";

export class userController {
  static getUsuarios = async (_, res) => {
    const usuarios = await userModel.getUsuarios();

    return res.status(200).json(usuarios);
  }
}