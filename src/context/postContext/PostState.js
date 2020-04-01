import React, { useReducer } from "react";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
  Set_Loading,
  Remove_Loading,
  Get_Posts,
  Set_View_Post,
  Clear_View_Post,
  Get_View_Post,
  Get_View_User_Post,
  Set_User_Posts,
  Delete_User_Post,
  Save_Img,
  Remove_img,
  Save_Post_tag,
  Save_New_Post,
  Clear_Create_New_Post,
  Update_User_Post_Info,
  Update_User_Home_Post_Info
} from "./postActions.js";
import moment from "moment";

const PostState = props => {
  const initialState = {
    loading: false, // for loading (using in create-post component)
    filterPost: false, // for showing users post only (on user profile page) [does not include post from saved collections]
    viewPostId: null, // contains requested post id
    viewPost: null, // contains requested post information
    posts: [
      {
        _id: 1,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis diam, pulvinar at ex at, mollis dictum justo. Aenean at aliquam ipsum. Duis tristique, lectus sodales pulvinar finibus, justo libero convallis ligula, ac bibendum magna mauris eget arcu. Sed suscipit augue at turpis rutrum rutrum. Nulla nec diam ut massa congue mollis finibus at tortor. Nunc suscipit elit ut elit lobortis maximus. Nulla facilisis euismod orci sed vulputate. Nulla posuere neque eu tellus pharetra, vitae tincidunt libero pellentesque. Vestibulum elit est, commodo id sapien sed, sodales vestibulum ante. Quisque eleifend, libero a hendrerit dictum, risus eros sagittis magna, ut mattis odio quam at odio. Curabitur vestibulum tincidunt erat sed ullamcorper. Aenean erat magna, lobortis sit amet risus non, hendrerit dapibus ex Duis sed leo in enim ultrices volutpat vel vel arcu. Pellentesque faucibus blandit condimentum. Aenean augue tellus, maximus vitae libero quis, tincidunt faucibus tellus. Fusce viverra ultrices feugiat. Nam non justo vel eros lobortis interdum eu maximus justo. Morbi et semper lectus, et dignissim quam. Pellentesque venenatis nisl nec blandit finibus. Donec laoreet, mauris eget commodo gravida, ipsum ipsum semper quam, in consectetur urna sapien id massa. Aenean condimentum viverra augue, ut interdum purus lobortis ac. Praesent at neque id massa consectetur congue quis in nibh. Nunc commodo at nisi non gravida. Morbi congue tincidunt nunc, vel mollis massa ultrices posuere. Integer feugiat urna ac orci auctor, nec consequat lectus consectetur. In cursus nisi commodo convallis sagittis.Ut nisi leo, pharetra quis laoreet a, hendrerit tempus enim. In at laoreet nisl. Maecenas vehicula, leo non condimentum tempus, libero ante suscipit dolor, sed venenatis purus tellus nec urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit, mauris sed volutpat scelerisque, libero purus finibus massa, et facilisis eros ex consequat risus. Curabitur nulla augue, interdum vel urna sit amet, ultrices interdum libero. Donec a risus commodo, porttitor ante et, finibus sem. Morbi sagittis quam vel massa venenatis posuere. Vivamus ullamcorper, est at venenatis fermentum, ante nisl vehicula mi, nec tristique diam sem at mauris. Vivamus odio ligula, tristique eget magna ut, ultricies rhoncus magna. Aliquam quis lectus fringilla, sollicitudin tellus vitae, dignissim diam.",
        tags: [], //optional
        postAuthor: "Varun",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png", //optional
        date: moment().format("ll")
      },
      {
        _id: 2,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tags: ["WEB", "CSS", "JavaScript"],
        postAuthor: "Sayuj",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll")
      },
      {
        _id: 3,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.google.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Ram",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll")
      },
      {
        _id: 4,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        postTitle: "Here we Go!",
        postDescription: "www.gmail.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Rohan",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll")
      },
      {
        _id: 5,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.lava.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Shakir",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll")
      },
      {
        _id: 6,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription: "www.wherever.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Sayuj1",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll")
      },
      {
        _id: 7,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.wohoo.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Varun",
        thumbnail: "",
        avatar: "",
        date: moment().format("ll")
      }
    ],
    userPosts: [
      {
        _id: 1,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/cat.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis diam, pulvinar at ex at, mollis dictum justo. Aenean at aliquam ipsum. Duis tristique, lectus sodales pulvinar finibus, justo libero convallis ligula, ac bibendum magna mauris eget arcu. Sed suscipit augue at turpis rutrum rutrum. Nulla nec diam ut massa congue mollis finibus at tortor. Nunc suscipit elit ut elit lobortis maximus. Nulla facilisis euismod orci sed vulputate. Nulla posuere neque eu tellus pharetra, vitae tincidunt libero pellentesque. Vestibulum elit est, commodo id sapien sed, sodales vestibulum ante. Quisque eleifend, libero a hendrerit dictum, risus eros sagittis magna, ut mattis odio quam at odio. Curabitur vestibulum tincidunt erat sed ullamcorper. Aenean erat magna, lobortis sit amet risus non, hendrerit dapibus ex Duis sed leo in enim ultrices volutpat vel vel arcu. Pellentesque faucibus blandit condimentum. Aenean augue tellus, maximus vitae libero quis, tincidunt faucibus tellus. Fusce viverra ultrices feugiat. Nam non justo vel eros lobortis interdum eu maximus justo. Morbi et semper lectus, et dignissim quam. Pellentesque venenatis nisl nec blandit finibus. Donec laoreet, mauris eget commodo gravida, ipsum ipsum semper quam, in consectetur urna sapien id massa. Aenean condimentum viverra augue, ut interdum purus lobortis ac. Praesent at neque id massa consectetur congue quis in nibh. Nunc commodo at nisi non gravida. Morbi congue tincidunt nunc, vel mollis massa ultrices posuere. Integer feugiat urna ac orci auctor, nec consequat lectus consectetur. In cursus nisi commodo convallis sagittis.Ut nisi leo, pharetra quis laoreet a, hendrerit tempus enim. In at laoreet nisl. Maecenas vehicula, leo non condimentum tempus, libero ante suscipit dolor, sed venenatis purus tellus nec urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent hendrerit, mauris sed volutpat scelerisque, libero purus finibus massa, et facilisis eros ex consequat risus. Curabitur nulla augue, interdum vel urna sit amet, ultrices interdum libero. Donec a risus commodo, porttitor ante et, finibus sem. Morbi sagittis quam vel massa venenatis posuere. Vivamus ullamcorper, est at venenatis fermentum, ante nisl vehicula mi, nec tristique diam sem at mauris. Vivamus odio ligula, tristique eget magna ut, ultricies rhoncus magna. Aliquam quis lectus fringilla, sollicitudin tellus vitae, dignissim diam.",
        tags: "", //optional
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" //optional
      },
      {
        _id: 2,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        tags: ["WEB", "CSS", "JavaScript"],
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        _id: 3,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.google.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        _id: 4,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        postTitle: "Here we Go!",
        postDescription: "www.gmail.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        _id: 5,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.lava.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        _id: 6,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
        postTitle: "Here we Go!",
        postDescription: "www.wherever.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        _id: 7,
        postImg: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
        postTitle: "Here we Go!",
        postDescription: "www.wohoo.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "sayuj1",
        thumbnail: "",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      }
    ], // default null
    createPost: {
      postImg: "",
      tags: []
    }
  };
  // for mananging state
  const [state, dispatch] = useReducer(postReducer, initialState);

  const setLoading = loading => {
    dispatch(Set_Loading(loading));
  };
  const removeLoading = loading => {
    dispatch(Remove_Loading(loading));
  };

  // for saving img in post state
  const saveImg = imgLocation => {
    dispatch(Save_Img(imgLocation));
  };

  const removeImg = () => {
    dispatch(Remove_img());
  };

  // getting posts
  const getPosts = () => {
    dispatch(Get_Posts());
  };

  // clearing view post information from the state
  const clearViewPost = () => {
    dispatch(Clear_View_Post());
  };

  // setting up the view post id in the state
  const setViewPost = postId => {
    dispatch(Set_View_Post(postId));
  };

  // getting requested post information
  const getViewPost = postId => {
    dispatch(Get_View_Post(postId));
  };

  // getting requested view user posts
  const getViewUserPost = postId => {
    dispatch(Get_View_User_Post(postId));
  };

  // getting user posts and setting user posts to the state
  const getUserPosts = userId => {
    // get the user posts and then set the user posts in the
    // dispatch(Set_User_Posts(userPosts));
  };

  // deleting user posts
  const deleteUserPost = postId => {
    dispatch(Delete_User_Post(postId));
  };

  // saving tags for new posts
  const savePostTag = postTags => {
    dispatch(Save_Post_tag(postTags));
  };

  const saveNewPost = postData => {
    // saving in the post state

    try {
      dispatch(Save_New_Post(postData));
      return "New Post Saved Successfully!";
    } catch (err) {
      return "Something Went Wrong, Please Try Again!";
    }
  };

  const clearCreateNewPost = () => {
    dispatch(Clear_Create_New_Post());
  };

  const updateUserPostInfo = user => {
    dispatch(Update_User_Post_Info(user));
  };

  const updateUserHomePostInfo = user => {
    dispatch(Update_User_Home_Post_Info(user));
  };

  return (
    // sharing post state values
    <PostContext.Provider
      value={{
        loading: state.loading,
        posts: state.posts,
        viewPostId: state.viewPostId,
        viewPost: state.viewPost,
        userPosts: state.userPosts,
        createPostTags: state.createPost.tags,
        createPostImg: state.createPost.postImg,
        setLoading: setLoading,
        removeLoading: removeLoading,
        getPosts: getPosts,
        setViewPost: setViewPost,
        clearViewPost: clearViewPost,
        getViewPost: getViewPost,
        getViewUserPost: getViewUserPost,
        getUserPosts: getUserPosts,
        deleteUserPost: deleteUserPost,
        saveImg: saveImg,
        removeImg: removeImg,
        savePostTag: savePostTag,
        saveNewPost: saveNewPost,
        clearCreateNewPost: clearCreateNewPost,
        updateUserPostInfo: updateUserPostInfo,
        updateUserHomePostInfo: updateUserHomePostInfo
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
