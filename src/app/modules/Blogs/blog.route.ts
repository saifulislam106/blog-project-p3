import { Router } from "express";
import { BlogControllers } from "./blog.controller";
import auth from "../../middleware/auth";
import { user_role } from "../User/user.constants";

const router = Router();

router.post("/create-blog",auth(user_role.user), BlogControllers.createBlog)
router.get("/:id", BlogControllers.getSingleBlog)
router.patch("/:id",auth(user_role.user), BlogControllers.updateBlog)
router.delete("/:id",auth(user_role.user ,user_role.admin), BlogControllers.deleteBlog)
router.get("/", BlogControllers.getAllBlog) //will be add auth

export const BlogRoutes = router;