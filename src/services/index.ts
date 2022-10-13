import axios from 'axios';
// import qs from 'qs';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_INAPRODUCT_API_URL,
});

const axiosInstanceWithToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_PRIVY_API_URL,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Headers':
      'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN, Authorization',

    // "HTTP/1.1 200 OK"
  },
});

axiosInstance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axiosInstance.defaults.headers.get['Content-Type'] = 'application/json';

if (typeof window !== 'undefined') {
  axiosInstanceWithToken.defaults.headers.post['Content-Type'] =
    'application/x-www-form-url-encoded';
  axiosInstanceWithToken.defaults.headers.get['Content-Type'] =
    'application/json';
}

const inaProductEndPoint = {
  userAccount: 'users',
  posts: 'posts',
  comments: 'comments',
};

const getAllUsersAccount = () =>
  axiosInstance.get(inaProductEndPoint.userAccount);

const getAllBlogPost = () => axiosInstance.get(inaProductEndPoint.posts);

const getAllComments = () => axiosInstance.get(inaProductEndPoint.comments);

const createNewPost = (data: any) =>
  axiosInstance.post(inaProductEndPoint.posts, data);

const getPostById = (postId: any) =>
  axiosInstance.get(`${inaProductEndPoint.posts}/${postId}`);

export {
  axiosInstance,
  getAllUsersAccount,
  getAllBlogPost,
  createNewPost,
  getAllComments,
  getPostById,
};
