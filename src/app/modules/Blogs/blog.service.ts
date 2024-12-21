import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await await Blog.create(payload);
  // console.log(payload);
  return result;
};

const getAllBlogfromDB = async () => {
  const result = await Blog.find().populate("author");
  return result;
};

const getSingleBlogfromDB = async (id: string) => {
  const result = await Blog.findById(id).populate("author");
  return result;
};

const updateBlogfromDB = async (id: string, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload);
  return result;
};

const deleteBlogfromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogfromDB,
  getSingleBlogfromDB,
  updateBlogfromDB,
  deleteBlogfromDB,
};
