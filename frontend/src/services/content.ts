import axios from "axios";

export const getAllBlogPosts = async () => {
  const response = await axios.get(`/api/blog`);
  return response.data;
};


export const getBlogPost = async (title: string) => {
  const response = await axios.get(`/api/blog/${encodeURIComponent(title)}`);
  return response.data;
};
