import React, { Suspense, lazy, Fragment } from "react";
// For Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// For Styling
import Styles from "../../styles/Layouts.module.css";

// States for sharing values between components
import PostState from "../../context/postContext/PostState";
import CommentState from "../../context/commentContext/CommentState";
import FollowingState from "../../context/followingContext/FollowingState";
import UserState from "../../context/userContext/UserState";
// for Going to top from bottom
import BackToTop from "./BackToTop";
// Navbar
const Header = lazy(() => import("../layouts/Header"));
// pages
const Home = lazy(() => import("../pages/Home"));
const ViewPost = lazy(() => import("../pages/ViewPost"));
const ViewUserPost = lazy(() => import("../pages/ViewUserPost"));
const Following = lazy(() => import("../pages/Following"));
const User = lazy(() => import("../pages/User"));
const PostCreate = lazy(() => import("../pages/PostCreate"));
const Page404 = lazy(() => import("../pages/Page404"));

const Layouts = () => {
  return (
    <Fragment>
      <Router>
        <UserState>
          <Suspense
            fallback={
              <div style={{ fontSize: "50px" }}>Loading Navbar....</div>
            }
          >
            <div className="header">
              <Header />
            </div>
          </Suspense>
          <div className={Styles.content}>
            <BackToTop />
            {/* for sharing post values across the components */}

            <FollowingState>
              <PostState>
                <CommentState>
                  <Suspense
                    fallback={
                      <div style={{ fontSize: "50px" }}>Loading routes....</div>
                    }
                  >
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/post/:id" component={ViewPost} />
                      <Route
                        exact
                        path="/user/post/:id"
                        component={ViewUserPost}
                      />
                      <Route
                        exact
                        path="/create-post/"
                        component={PostCreate}
                      />
                      <Route exact path="/following" component={Following} />
                      <Route exact path="/user/:user" component={User} />
                      <Route path="*" component={Page404} />
                    </Switch>
                  </Suspense>
                </CommentState>
              </PostState>
            </FollowingState>
          </div>
          <div className={Styles.footer}>
            Get Learn ©2020 Created By App-Devs
          </div>
        </UserState>
      </Router>
    </Fragment>
  );
};

export default Layouts;
