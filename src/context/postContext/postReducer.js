import {
  SET_LOADING,
  TOGGLE_POST_FILTER,
  GET_POSTS,
  CLEAR_VIEW_POST,
  GET_VIEW_POST,
  GET_VIEW_USER_POST,
  SET_USER_POSTS,
  DELETE_USER_POSTS,
  SAVE_NEW_POST,
  UPDATE_USER_POST_INFO,
  UPDATE_USER_HOME_POST_INFO,
  EDIT_POST,
  CLEAR_EDIT_POST,
  UPDATE_EDIT_POST,
  FILTER_POSTS,
} from "./postTypes";

const postReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case TOGGLE_POST_FILTER:
      return { ...state, filterPost: !state.filterPost };
    case GET_POSTS:
      return { ...state };
    // case SET_VIEW_POST:
    //   return { ...state, viewPostId: action.payload };
    case GET_VIEW_POST:
      return {
        ...state,
        viewPost: state.posts.filter((post) => post._id === action.payload),
      };
    case GET_VIEW_USER_POST:
      return {
        ...state,
        viewPost: state.userPosts.filter((post) => post._id === action.payload),
      };
    case CLEAR_VIEW_POST:
      return {
        ...state,
        viewPost: null,
      };
    case SET_USER_POSTS:
      return {
        ...state,
      };
    case DELETE_USER_POSTS:
      return {
        ...state,
        userPosts: state.userPosts.filter(
          (userPost) => userPost._id !== action.payload
        ),
        posts: state.posts.filter(
          (userPost) => userPost._id !== action.payload
        ),
      };

    case SAVE_NEW_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        userPosts: [action.payload, ...state.userPosts],
      };

    case UPDATE_USER_POST_INFO:
      return {
        ...state,
        userPosts: state.userPosts.map((post) =>
          action.payload.avatar
            ? { ...post, avatar: action.payload.avatar }
            : { ...post, avatar: action.payload.avatar }
        ),
      };
    case UPDATE_USER_HOME_POST_INFO:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.postAuthor.toLowerCase() ===
          action.payload.username.toLowerCase()
            ? { ...post, avatar: action.payload.avatar }
            : { ...post }
        ),
      };
    case EDIT_POST:
      return {
        ...state,
        editablePost: action.payload,
      };
    case CLEAR_EDIT_POST:
      return {
        ...state,
        editablePost: null,
      };
    case UPDATE_EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id
            ? {
                ...post,
                postTitle: action.payload.postTitle,
                postDescription: action.payload.postDescription,
                tags: action.payload.postTags,
              }
            : post
        ),
        userPosts: state.userPosts.map((userPost) =>
          userPost._id === action.payload._id
            ? {
                ...userPost,
                postTitle: action.payload.postTitle,
                postDescription: action.payload.postDescription,
                tags: action.payload.postTags,
              }
            : userPost
        ),
      };
    case FILTER_POSTS:
      // console.log(state.userPosts.sort);
      // const sa = state.userPosts.sort(
      //   (a, b) => new moment(a.date) - new moment(b.date)
      // );
      // console.log("sorted array", sa);
      switch (action.payload) {
        case "latest":
          state.userPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case "oldest":
          state.userPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        default:
          state.userPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
      }

      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
