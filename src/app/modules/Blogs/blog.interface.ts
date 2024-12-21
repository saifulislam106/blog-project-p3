import { Types } from "mongoose";

export type TBlog ={
   title:string;
    content:string;
    author:Types.ObjectId; //A reference to the User model, indicating the author of the blog post.
    isPublished: boolean;
}



