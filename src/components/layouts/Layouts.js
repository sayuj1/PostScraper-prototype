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
import Settings from "../pages/Settings";

// Navbar
const Navbar = lazy(() => import("../layouts/Navbar"));
// pages
const Home = lazy(() => import("../pages/Home"));
const ViewPost = lazy(() => import("../pages/ViewPost"));
const Following = lazy(() => import("../pages/Following"));
const User = lazy(() => import("../pages/User"));
const PostCreate = lazy(() => import("../pages/PostCreate"));
const Page404 = lazy(() => import("../pages/Page404"));

const Layouts = () => {
  return (
    <Fragment>
      <div>
        <Router>
          <UserState>
            <Suspense
              fallback={
                <div style={{ fontSize: "50px" }}>Loading Navbar....</div>
              }
            >
              <div className="header">
                <Navbar />
              </div>
            </Suspense>
            <div className={`background ${Styles.content}`}>
              <BackToTop />
              {/* for sharing post values across the components */}
              <FollowingState>
                <PostState>
                  <CommentState>
                    <Suspense
                      fallback={
                        <div style={{ fontSize: "50px" }}>
                          Loading routes....
                        </div>
                      }
                    >
                      <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/post/:id" component={ViewPost} />
                        <Route
                          exact
                          path="/:userName/post/:id"
                          component={ViewPost}
                        />

                        <Route
                          exact
                          path="/create-post/"
                          component={PostCreate}
                        />
                        <Route exact path="/following" component={Following} />
                        <Route exact path="/user/:user" component={User} />
                        <Route
                          exact
                          path="/settings/:settingName"
                          component={Settings}
                        />
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
      </div>
    </Fragment>
  );
};

export default Layouts;
