import { Router } from "express";
import { UserRoutes } from "../modules/User/user.route";
import { BlogRoutes } from "../modules/Blogs/blog.route";
import { AuthRouter } from "../modules/Auth/auth.route";

const router = Router()

const moduleRoutes = [
    {
        path:"/users",
        route: UserRoutes
    },
    {
        path:"/blogs",
        route:BlogRoutes
    },
    {
        path:"/auth",
        route:AuthRouter
    },
   
]

moduleRoutes.forEach(route=> router.use(route.path , route.route))

export default router;