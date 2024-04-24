import React, { useEffect } from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";

import PostCard from "../../components/PostCard";
import { useSelector } from "react-redux";
const cx = classNames.bind(styles);

const Post = () => {
  const response = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (response) {
      sessionStorage.setItem("data", JSON.stringify(response?.user));
      sessionStorage.setItem(
        "refreshToken",
        JSON.stringify(response?.refresh_token)
      );
      console.log(response);
    }
  }, []);

  return (
    <div className={cx("post")}>
      <PostCard />
    </div>
  );
};

export default Post;
