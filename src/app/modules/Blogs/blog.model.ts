import { Schema } from "mongoose";
import { TBlog } from "./blog.interface";


export const blogSchema = new Schema<TBlog>({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    isPublished:{
        type:Boolean,
        default:true
    }

})