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
  FILTER_USER_POSTS,
  SEARCH_USER_POSTS_FILTER,
  CLEAR_SEARCH_USER_POSTS_FILTER,
  SAVE_POST,
  REMOVE_SAVE_POST,
  SET_USER_SAVED_POSTS,
  SEARCH_USER_SAVED_POSTS_FILTER,
  CLEAR_SEARCH_USER_SAVED_POSTS_FILTER,
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
        searchUserPosts: state.searchUserPosts
          ? state.searchUserPosts.filter(
              (searchUserPost) => searchUserPost._id !== action.payload
            )
          : null,
        userPosts: state.userPosts.filter(
          (userPost) => userPost._id !== action.payload
        ),
        posts: state.posts.filter(
          (userPost) => userPost._id !== action.payload
        ),
        userSavedPosts: state.userSavedPosts.filter(
          (userSavedPost) => userSavedPost._id !== action.payload
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
        userSavedPosts: state.userSavedPosts.map((savedPost) =>
          savedPost.postAuthor.toLowerCase() ===
          action.payload.username.toLowerCase()
            ? action.payload.avatar
              ? { ...savedPost, avatar: action.payload.avatar }
              : { ...savedPost, avatar: action.payload.avatar }
            : savedPost
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
        userSavedPosts: state.userSavedPosts.map((userSavedPost) =>
          userSavedPost._id === action.payload._id
            ? {
                ...userSavedPost,
                postTitle: action.payload.postTitle,
                postDescription: action.payload.postDescription,
                tags: action.payload.postTags,
              }
            : userSavedPost
        ),
      };
    case FILTER_USER_POSTS:
      // console.log(state.userPosts.sort);
      // const sa = state.userPosts.sort(
      //   (a, b) => new moment(a.date) - new moment(b.date)
      // );
      // console.log("sorted array", sa);
      switch (action.payload) {
        case "latest":
          state.userPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
          const searchLatestUserPosts = state.searchUserPosts
            ? state.searchUserPosts.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
              )
            : null;

          break;
        case "oldest":
          state.userPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
          const searchOldestUserPosts = state.searchUserPosts
            ? state.searchUserPosts.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
              )
            : null;
          break;
        default:
          state.userPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
          const searchDefaultUserPosts = state.searchUserPosts
            ? state.searchUserPosts.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
              )
            : null;
          break;
      }

      return {
        ...state,
        userPostfilter: action.payload,
      };
    case SEARCH_USER_POSTS_FILTER:
      let searchValue = action.payload.value.replace(/[^a-zA-Z0-9 ]/g, "");
      searchValue = searchValue.trim();
      // console.log("search value ", `${searchValue}`, typeof `${searchValue}`);
      const reg = new RegExp(`${searchValue}`, "gi");
      let searchTag = action.payload.value.split(",");
      searchTag = searchTag.map((s) => s.replace(/[^a-zA-Z ]/g, ""));
      searchTag = searchTag.map((s) => s.trim());
      // console.log("Search Tag ", searchTag);
      // let i = 0;
      // let postFound = [];
      // for (; i < state.userPosts.length; i++) {
      //   if (
      //     state.userPosts[i].tags.filter((tag) => {
      //       let j = 0;
      //       for (; j < searchTag.length; j++) {
      //         if (searchTag[j] == tag) {
      //           return true;
      //         }
      //       }
      //       return false;
      //     }).length !== 0
      //   ) {
      //     postFound.push(state.userPosts[i]);
      //   }
      // }
      // console.log(postFound);
      // console.log(action.payload.filter, typeof action.payload.filter);
      return {
        ...state,
        searchUserPosts: state.userPosts.filter((userPost) =>
          action.payload.filter !== "tags"
            ? userPost[action.payload.filter].match(reg)
            : userPost.tags.filter((tag) => {
                let j = 0;
                for (; j < searchTag.length; j++) {
                  let reg1 = new RegExp(`${searchTag[j]}`, "gi");
                  if (searchTag[j] !== "" && tag.match(reg1)) {
                    return true;
                  }
                  // if (searchTag[j].toLowerCase() == tag.toLowerCase()) {
                  //   return true;
                  // }
                }
                return false;
              }).length !== 0
        ),
      };

    case CLEAR_SEARCH_USER_POSTS_FILTER:
      return {
        ...state,
        searchUserPosts: null,
      };
    case SAVE_POST:
      return {
        ...state,
        userSavedPosts: [action.payload.post, ...state.userSavedPosts],
        posts: state.posts.map((post) =>
          post._id === action.payload.post._id
            ? {
                ...post,
                postSavedBy: [action.payload.user, ...post.postSavedBy],
              }
            : post
        ),
        userPosts: state.userPosts.map((userPost) =>
          userPost._id === action.payload.post._id
            ? {
                ...userPost,
                postSavedBy: [action.payload.user, ...userPost.postSavedBy],
              }
            : userPost
        ),
      };
    case REMOVE_SAVE_POST:
      return {
        ...state,
        userSavedPosts: state.userSavedPosts.filter(
          (savedPost) => savedPost._id !== action.payload.postId
        ),
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? {
                ...post,
                postSavedBy: post.postSavedBy.filter(
                  (postSavedBy) => postSavedBy !== action.payload.user
                ),
              }
            : post
        ),
        userPosts: state.userPosts.map((userPost) =>
          userPost._id === action.payload.postId
            ? {
                ...userPost,
                postSavedBy: userPost.postSavedBy.filter(
                  (postSavedBy) => postSavedBy !== action.payload.user
                ),
              }
            : userPost
        ),
      };
    case SET_USER_SAVED_POSTS:
      return {
        ...state,
        userSavedPosts: [action.payload],
      };
    case SEARCH_USER_SAVED_POSTS_FILTER:
      let searchSavePostValue = action.payload.value.replace(
        /[^a-zA-Z0-9 ]/g,
        ""
      );
      searchSavePostValue = searchSavePostValue.trim();
      // console.log("search value ", `${searchSavePostValue}`, typeof `${searchSavePostValue}`);
      const regg = new RegExp(`${searchSavePostValue}`, "gi");
      let searchSavePostTag = action.payload.value.split(",");
      searchSavePostTag = searchSavePostTag.map((s) =>
        s.replace(/[^a-zA-Z ]/g, "")
      );
      searchSavePostTag = searchSavePostTag.map((s) => s.trim());
      return {
        ...state,
        searchUserSavedPosts: state.userSavedPosts.filter((userSavedPost) =>
          action.payload.filter !== "tags"
            ? userSavedPost[action.payload.filter].match(regg)
            : userSavedPost.tags.filter((tag) => {
                let j = 0;
                for (; j < searchSavePostTag.length; j++) {
                  let reg1 = new RegExp(`${searchSavePostTag[j]}`, "gi");
                  if (searchSavePostTag[j] !== "" && tag.match(reg1)) {
                    return true;
                  }
                  // if (searchTag[j].toLowerCase() == tag.toLowerCase()) {
                  //   return true;
                  // }
                }
                return false;
              }).length !== 0
        ),
      };

    case CLEAR_SEARCH_USER_SAVED_POSTS_FILTER:
      return {
        ...state,
        searchUserSavedPosts: null,
      };
    default:
      return state;
  }
};

export default postReducer;
