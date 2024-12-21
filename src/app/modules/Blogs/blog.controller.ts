
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlogIntoDB(req.body);
  //   console.log(result);
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Blog created successfully',
      data: result,
    });
  });

const getAllBlog = catchAsync(async (req, res) => {
  // console.log("test", req.user);
    const result = await BlogServices.getAllBlogfromDB(req.query);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blogs fetched successfully',
      data: result,
    });
  });

const getSingleBlog = catchAsync(async (req, res) => {
    const {id}=req.params
    const result = await BlogServices.getSingleBlogfromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blogs fetched successfully',
      data: result,
    });
  });
const updateBlog = catchAsync(async (req, res) => {
    const {id}=req.params
    const result = await BlogServices.updateBlogfromDB(id ,req.body);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog updated successfully',
      data: result,
    });
  });
const deleteBlog = catchAsync(async (req, res) => {
    const {id}=req.params
    const result = await BlogServices.deleteBlogfromDB(id);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Blog deleted successfully',
      data: result,
    });
  });
  
  export const BlogControllers = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog
  };