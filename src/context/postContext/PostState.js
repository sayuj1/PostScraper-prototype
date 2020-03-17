import React, { useReducer } from "react";
import PostContext from "./postContext";
import postReducer from "./postReducer";

const PostState = props => {
  const initialState = {
    filterPost: false,
    posts: [
      {
        _id: 1,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.instagram.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Varun"
      },
      {
        _id: 2,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.facebook.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Sayuj"
      },
      {
        _id: 3,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.google.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Ram"
      },
      {
        _id: 4,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.gmail.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Rohan"
      },
      {
        _id: 5,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.lava.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Shakir"
      },
      {
        _id: 6,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.wherever.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Sayuj"
      },
      {
        _id: 7,
        postImg: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
        postTitle: "Here we Go!",
        postDescription: "www.wohoo.com",
        tags: ["HTML", "CSS", "JavaScript"],
        postAuthor: "Varun"
      }
    ]
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider
      value={{
        posts: state.posts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
