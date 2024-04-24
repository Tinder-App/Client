import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import { CreatePostIcon } from "../../components/icons/icons";

const cx = classNames.bind(styles);
const Profile = () => {
  const [user, setUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const response = JSON.parse(sessionStorage.getItem("data"));

  useEffect(() => {
    setUser(response.user);
  }, []);

  const openModal = () => {
    setIsOpenModal(true);
  };
  return (
    <div className={cx("profile")}>
      {user?.post ? (
        <div>Có post rồi</div>
      ) : !isOpenModal ? (
        <div className={cx("no-post")} onClick={openModal}>
          <p>
            <CreatePostIcon className={cx("create-post-icon")} />
          </p>
          <p>You dont have any posts. Click here to create post</p>
        </div>
      ) : (
        <div className={cx("modal")}>
          Modal <button onClick={() => setIsOpenModal(false)}>Click</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
