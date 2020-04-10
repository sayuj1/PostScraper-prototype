import React, { useReducer } from "react";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
  Set_Loading,
  Get_Posts,
  Clear_View_Post,
  Get_View_Post,
  Get_View_User_Post,
  Set_User_Posts,
  Delete_User_Post,
  Save_New_Post,
  Update_User_Post_Info,
  Update_User_Home_Post_Info,
  Edit_Post,
  Clear_Edit_Post,
  Update_Edit_Post,
  Filter_User_Posts,
  Search_User_Posts_Filter,
  Clear_Search_User_Posts_Filter,
  Save_Post,
  Remove_Save_Post,
  Set_User_Saved_Posts,
  Search_User_Saved_Posts_Filter,
  Clear_Search_User_Saved_Posts_Filter,
  // Filter_User_Saved_Posts,
} from "./postActions.js";
import moment from "moment";

const PostState = (props) => {
  const initialState = {
    loading: false, // for loading (using in create-post component)
    userPostfilter: "latest", // for showing users post only (on user profile page) [does not include post from saved collections]
    userSavedPostFilter: "latest",
    searchUserPosts: null,
    searchUserSavedPosts: null,
    viewPost: null, // contains requested post information
    posts: [
      {
        _id: 1,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis diam, pulvinar at ex at, mollis dictum justo. Aenean at aliquam ipsum. Duis tristique, lectus sodales pulvinar finibus, justo libero convallis ligula, ac bibendum magna mauris eget arcu. Sed suscipit augue at turpis rutrum rutrum. Nulla nec diam ut massa congue mollis finibus at tortor. Nunc suscipit elit ut elit lobortis maximus. Nulla facilisis euismod orci sed vulputate. Nulla posuere neque eu tellus pharetra, vitae tincidunt libero pellentesque. Vestibulum elit est, commodo id sapien sed, sodales vestibulum ante. Quisque eleifend, libero a hendrerit dictum, risus eros sagittis magna, ut mattis odio quam at odio. Curabitur vestibulum tincidunt erat sed ullamcorper. Aenean erat magna, lobortis sit amet risus non, hendrerit dapibus ex Duis sed leo in enim ultrices volutpat vel vel arcu. Pellentesque faucibus blandit condimentum. Aenean augue tellus, maximus vitae libero quis, tincidunt faucibus tellus. Fusce viverra ultrices feugiat. Nam non justo vel eros lobortis interdum eu maximus justo. Morbi et semper lectus, et dignissim quam. Pellentesque venenatis nisl nec blandit finibus. Donec laoreet, mauris eget commodo gravida, ipsum ipsum semper quam, in consectetur urna sapien id massa. Aenean condimentum viverra augue, ut interdum purus lobortis ac. Praesent at neque id massa consectetur congue quis in nibh. Nunc commodo at nisi non gravida. Morbi congue tincidunt nunc, vel mollis massa ultrices posuere. Integer feugiat urna ac orci auctor, nec consequat lectus consectetur. In cursus nisi commodo convallis sagittis.Ut nisi leo, pharetra quis laoreet a, hendrerit tempus enim. In at laoreet nisl. Maecenas vehicula, leo non condimentum tempus, libero ante suscipit dolor, sed venenatis purus tellus nec urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit, mauris sed volutpat scelerisque, libero purus finibus massa, et facilisis eros ex consequat risus. Curabitur nulla augue, interdum vel urna sit amet, ultrices interdum libero. Donec a risus commodo, porttitor ante et, finibus sem. Morbi sagittis quam vel massa venenatis posuere. Vivamus ullamcorper, est at venenatis fermentum, ante nisl vehicula mi, nec tristique diam sem at mauris. Vivamus odio ligula, tristique eget magna ut, ultricies rhoncus magna. Aliquam quis lectus fringilla, sollicitudin tellus vitae, dignissim diam.",
        tags: [], //optional
        category: "",
        postAuthor: "Varun",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", //optional
        date: moment().format("ll"),
        postSavedBy: ["mohan"], // default: empty array, contains username of users who saved it
      },
      {
        _id: 2,
        postImg: "",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tags: ["WEB", "CSS", "JavaScript"],
        category: "WEB DEVELOPMENT",
        postAuthor: "Sayuj",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll"),
        postSavedBy: ["varun"],
      },
      {
        _id: 3,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.google.com",
        tags: ["PYTHON", "DJANGO", "JavaScript"],
        category: "MACHINE LEARNING",
        postAuthor: "Ram",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll"),
        postSavedBy: [],
      },
      {
        _id: 4,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        postTitle: "Here we Go!",
        postDescription: "www.gmail.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "WEB DEVELOPMENT",
        postAuthor: "Rohan",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll"),
        postSavedBy: [],
      },
      {
        _id: 5,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.lava.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "WEB DEVELOPMENT",
        postAuthor: "Shakir",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll"),
        postSavedBy: [],
      },
      {
        _id: 6,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription: "www.wherever.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "WEB DEVELOPMENT",
        postAuthor: "Mohan",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll"),
        postSavedBy: [],
      },
      {
        _id: 7,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.wohoo.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "INTERNET OF THINGS",
        postAuthor: "Varun",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll"),
        postSavedBy: [],
      },
    ], // default empty array
    userPosts: [
      {
        _id: 21,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
        postTitle: "Sayuj",
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis diam, pulvinar at ex at, mollis dictum justo. Aenean at aliquam ipsum. Duis tristique, lectus sodales pulvinar finibus, justo libero convallis ligula, ac bibendum magna mauris eget arcu. Sed suscipit augue at turpis rutrum rutrum. Nulla nec diam ut massa congue mollis finibus at tortor. Nunc suscipit elit ut elit lobortis maximus. Nulla facilisis euismod orci sed vulputate. Nulla posuere neque eu tellus pharetra, vitae tincidunt libero pellentesque. Vestibulum elit est, commodo id sapien sed, sodales vestibulum ante. Quisque eleifend, libero a hendrerit dictum, risus eros sagittis magna, ut mattis odio quam at odio. Curabitur vestibulum tincidunt erat sed ullamcorper. Aenean erat magna, lobortis sit amet risus non, hendrerit dapibus ex Duis sed leo in enim ultrices volutpat vel vel arcu. Pellentesque faucibus blandit condimentum. Aenean augue tellus, maximus vitae libero quis, tincidunt faucibus tellus. Fusce viverra ultrices feugiat. Nam non justo vel eros lobortis interdum eu maximus justo. Morbi et semper lectus, et dignissim quam. Pellentesque venenatis nisl nec blandit finibus. Donec laoreet, mauris eget commodo gravida, ipsum ipsum semper quam, in consectetur urna sapien id massa. Aenean condimentum viverra augue, ut interdum purus lobortis ac. Praesent at neque id massa consectetur congue quis in nibh. Nunc commodo at nisi non gravida. Morbi congue tincidunt nunc, vel mollis massa ultrices posuere. Integer feugiat urna ac orci auctor, nec consequat lectus consectetur. In cursus nisi commodo convallis sagittis.Ut nisi leo, pharetra quis laoreet a, hendrerit tempus enim. In at laoreet nisl. Maecenas vehicula, leo non condimentum tempus, libero ante suscipit dolor, sed venenatis purus tellus nec urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit, mauris sed volutpat scelerisque, libero purus finibus massa, et facilisis eros ex consequat risus. Curabitur nulla augue, interdum vel urna sit amet, ultrices interdum libero. Donec a risus commodo, porttitor ante et, finibus sem. Morbi sagittis quam vel massa venenatis posuere. Vivamus ullamcorper, est at venenatis fermentum, ante nisl vehicula mi, nec tristique diam sem at mauris. Vivamus odio ligula, tristique eget magna ut, ultricies rhoncus magna. Aliquam quis lectus fringilla, sollicitudin tellus vitae, dignissim diam.",
        tags: [], //optional
        category: "", // optional default null
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", //optional
        date: moment().format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
      {
        _id: 22,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "by the way",
        postDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tags: ["WEB", "CSS", "JavaScript"],
        category: "WEB DEVELOPMENT",
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        date: moment().subtract(1, "days").format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
      {
        _id: 23,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "just testing it",
        postDescription: "www.google.com",
        tags: ["PYTHON", "SCIKIT", "PANDA"],
        category: "MACHINE LEARNING",
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        date: moment().subtract(2, "days").format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
      {
        _id: 24,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        postTitle: "no big deal right",
        postDescription: "www.gmail.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "DUMMY",
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        date: moment().subtract(3, "days").format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
      {
        _id: 25,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "you are damn right",
        postDescription: "www.lava.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "",
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        date: moment().subtract(4, "days").format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
      {
        _id: 26,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "ok then see you",
        postDescription: "www.wherever.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "WEB DEVELOPMENT",
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        date: moment().subtract(5, "days").format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
      {
        _id: 27,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "see you soon",
        postDescription: "www.wohoo.com",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "MACHINE LEARNING",
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        date: moment().subtract(6, "days").format("MMM D YYYY, h:mm:ss A"),
        postSavedBy: [],
      },
    ], // default empty array
    editablePost: null, // edit post info store here
    userSavedPosts: [], //* contains saved posts id (on server-side), on client-side it contains user posts
  };
  // for mananging state
  const [state, dispatch] = useReducer(postReducer, initialState);

  const setLoading = (loading) => {
    dispatch(Set_Loading(loading));
  };

  // getting posts (at home page)
  const getPosts = () => {
    dispatch(Get_Posts());
  };

  // clearing view post information from the state
  const clearViewPost = () => {
    dispatch(Clear_View_Post());
  };

  // getting requested post information
  const getViewPost = (postId) => {
    dispatch(Get_View_Post(postId));
  };

  // getting requested view user posts
  const getViewUserPost = (postId) => {
    dispatch(Get_View_User_Post(postId));
  };

  // getting user posts and setting user posts to the state
  const getUserPosts = (userId) => {
    // get the user posts and then set the user posts in the
    // dispatch(Set_User_Posts(userPosts));
  };

  // deleting user posts
  const deleteUserPost = (postId) => {
    dispatch(Delete_User_Post(postId));
  };

  const saveNewPost = (postData) => {
    // saving in the post state

    try {
      dispatch(Save_New_Post(postData));
      return "New Post Saved Successfully!";
    } catch (err) {
      return "Something Went Wrong, Please Try Again!";
    }
  };

  const updateUserPostInfo = (user) => {
    dispatch(Update_User_Post_Info(user));
  };

  const updateUserHomePostInfo = (user) => {
    dispatch(Update_User_Home_Post_Info(user));
  };

  const editPost = (post) => {
    dispatch(Edit_Post(post));
  };

  const clearEditPost = () => {
    dispatch(Clear_Edit_Post());
  };

  const updateEditPost = (post) => {
    try {
      dispatch(Update_Edit_Post(post));
      return "Post Edited Successfully!";
    } catch (err) {
      return "Something Went Wrong, Please Try Again!";
    }
  };

  const filterUserPosts = (filter) => {
    dispatch(Filter_User_Posts(filter));
  };

  const searchUserPostsFilter = (searchValue, filterType) => {
    dispatch(Search_User_Posts_Filter(searchValue, filterType));
  };

  const clearSearchUserPostsFilter = () => {
    dispatch(Clear_Search_User_Posts_Filter());
  };

  //* saving post as a collection
  const savePost = (post, user) => {
    //TODO: send post _id to the server for saving in the users collection
    dispatch(Save_Post(post, user));
  };

  const removeSavePost = (postId, user) => {
    dispatch(Remove_Save_Post(postId, user));
  };

  //* getting user saved posts
  const getUserSavedPosts = (userId) => {
    //TODO: send this user id to the server to fetch user save posts
    // dispatch(Set_User_Saved_Posts(userSavedPosts));
  };
  const searchUserSavedPostsFilter = (searchValue, filterType) => {
    dispatch(Search_User_Saved_Posts_Filter(searchValue, filterType));
  };

  const clearSearchUserSavedPostsFilter = () => {
    dispatch(Clear_Search_User_Saved_Posts_Filter());
  };

  // const filterUserSavedPosts = (filter) => {
  //   dispatch(Filter_User_Saved_Posts(filter));
  // };

  return (
    // sharing post state values
    <PostContext.Provider
      value={{
        loading: state.loading,
        userPostfilter: state.userPostfilter,
        posts: state.posts,
        viewPost: state.viewPost,
        userPosts: state.userPosts,
        editablePost: state.editablePost,
        searchUserPosts: state.searchUserPosts,
        userSavedPosts: state.userSavedPosts,
        searchUserSavedPosts: state.searchUserSavedPosts,
        // userSavedPostFilter: state.userSavedPostFilter,
        setLoading: setLoading,
        getPosts: getPosts,
        clearViewPost: clearViewPost,
        getViewPost: getViewPost,
        getViewUserPost: getViewUserPost,
        getUserPosts: getUserPosts,
        deleteUserPost: deleteUserPost,
        saveNewPost: saveNewPost,
        updateUserPostInfo: updateUserPostInfo,
        updateUserHomePostInfo: updateUserHomePostInfo,
        editPost: editPost,
        clearEditPost: clearEditPost,
        updateEditPost: updateEditPost,
        filterUserPosts: filterUserPosts,
        searchUserPostsFilter: searchUserPostsFilter,
        clearSearchUserPostsFilter: clearSearchUserPostsFilter,
        savePost: savePost,
        removeSavePost: removeSavePost,
        getUserSavedPosts: getUserSavedPosts,
        searchUserSavedPostsFilter: searchUserSavedPostsFilter,
        clearSearchUserSavedPostsFilter: clearSearchUserSavedPostsFilter,
        // filterUserSavedPosts: filterUserSavedPosts,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
