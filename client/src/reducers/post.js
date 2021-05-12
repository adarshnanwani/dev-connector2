import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case UPDATE_LIKES: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          const newPost = { ...post };
          if (newPost._id === payload.id) {
            newPost.likes = payload.likes;
          }
          return newPost;
        }),
      };
    }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default postReducer;