import React, { useEffect, useState } from "react";
import styles from "./PostCard.module.scss";
import classNames from "classnames/bind";
import imageUrl from "../../assets/images/7.jpg";
import { HeartIcon, CancelIcon } from "../icons/icons";
// import imgUrl from "../../../public/assets/uploads/7.jpg";

const cx = classNames.bind(styles);

const PostCard = () => {
  // const [user, setUser] = useState(null);
  const user = JSON.parse(sessionStorage.getItem("data"));
  useEffect(() => {
    console.log(user);
  }, []);

  const imagePath = user?.avatar;
  useEffect(() => {
    console.log(imagePath);
  }, []);

  return (
    <div className={cx("post-card")}>
      <div className={cx("post-image")}>
        <img src={imageUrl} alt="anh" />
      </div>
    </div>
  );
};

export default PostCard;
