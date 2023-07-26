import axios from "axios";

// const url = "http://localhost:5000/posts";
// "proxy": "http://localhost:5000/", go add this in package.json for loacl enviourment
const url = "https://memory-lane-4njy.onrender.com/posts";

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const dislikePost = (id) => axios.patch(`${url}/${id}/dislikePost`);
