import express from 'express';
import { userController } from '../controller/user.controller.js';
import { postController } from '../controller/post.controller.js';
import { postPageController } from '../controller/postPage.controller.js';

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/usuarios", userController.getUsuarios);
router.get("/tweets/", postController.getPosts);
router.get("/tweets/:id", postPageController.getPostPage);

export default router;