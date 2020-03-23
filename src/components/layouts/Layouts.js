import React, { Fragment } from "react";
// For Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// For Styling
import Styles from "../../styles/Layouts.module.css";
// Pages
import Home from "../pages/Home";
import ViewPost from "../pages/ViewPost";
import Following from "../pages/Following";
import User from "../pages/User";
import Page404 from "../pages/Page404";
// Layout
import Header from "./Header";
// States for sharing values between components
import PostState from "../../context/postContext/PostState";
import CommentState from "../../context/commentContext/CommentState";
import FollowingState from "../../context/followingContext/FollowingState";
import UserState from "../../context/userContext/UserState";
// for Going to top from bottom
import BackToTop from "./BackToTop";

const Layouts = () => {
  return (
    <Fragment>
      <Router>
        <UserState>
          <div className="header">
            <Header />
          </div>
          <div className={Styles.content}>
            <BackToTop />
            {/* for sharing post values across the components */}

            <FollowingState>
              <PostState>
                <CommentState>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/post/:id" component={ViewPost} />
                    <Route exact path="/following" component={Following} />
                    <Route exact path="/user/:user" component={User} />
                    <Route path="*" component={Page404} />
                  </Switch>
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
