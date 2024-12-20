import { Types } from "mongoose";

export type TBlog ={
   title:string;
    content:string;
    author:Types.ObjectId; //A reference to the User model, indicating the author of the blog post.
    isPublished: boolean;
}



// title: string – 
// content: string – The main body or content of the blog post.
// author: ObjectId – 
// isPublished: boolean – A flag indicating whether the blog post is published. Default is true (published).
// createdAt: Date – The timestamp when the blog post was created.
// updatedAt: Date – The timestamp of the last update to the blog post.