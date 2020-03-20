import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styles from "../../styles/Layouts.module.css";
import Home from "../pages/Home";
import ViewPost from "../pages/ViewPost";
import Page404 from "../pages/Page404";
import Header from "./Header";
import PostState from "../../context/postContext/PostState";
import CommentState from "../../context/commentContext/CommentState";
import BackToTop from "./BackToTop";

const Layouts = () => {
  return (
    <Fragment>
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className={Styles.postsContent}>
          <BackToTop />
          {/* for sharing post values across the components */}

          <PostState>
            <CommentState>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/post/:id" component={ViewPost} />
                <Route path="/page-not-found" component={Page404} />
              </Switch>
            </CommentState>
          </PostState>
        </div>
        <div className={Styles.footer}>Get Learn ©2020 Created By App-Devs</div>
      </Router>
    </Fragment>
  );
};

export default Layouts;
