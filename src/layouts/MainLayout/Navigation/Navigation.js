import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import classNames from "classnames/bind";
import logo from "../../../assets/images/3.png";
import {
  HomeIcon,
  ChatIcon,
  ProfileIcon,
  ChatBotIcon,
  LogoutIcon,
} from "../../../components/icons/icons";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const cx = classNames.bind(styles);

const navList = [
  {
    path: "/post",
    icon: <HomeIcon />,
    title: "Post",
  },
  {
    path: "/chat",
    icon: <ChatIcon />,
    title: "Chat",
  },
  {
    path: "/profile",
    icon: <ProfileIcon />,
    title: "Profile",
  },
  {
    path: "/chatbot",
    icon: <ChatBotIcon />,
    title: "Chatbot",
  },
  {
    path: "/",
    icon: <LogoutIcon />,
    title: "Log out",
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastElement, setLastElement] = useState(null);

  // const [currentPage, setCurrentPage] = useState(null);
  const handleClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    setLastElement(pathParts[pathParts.length - 1]);
  }, [location.pathname]);

  return (
    <div className={cx("nav")}>
      <div className={cx("nav__logo")}>
        <img src={logo} alt="logo" />
      </div>
      <div className={cx("nav__wrapper")}>
        {navList.map((item, idx) => (
          <div
            className={cx("nav__item", {
              active: item.title.toLocaleLowerCase() === lastElement,
            })}
            key={idx}
            onClick={() => {
              handleClick(item.path);
            }}
          >
            <div
              className={cx("icon", {
                "icon--active": item.title.toLocaleLowerCase() === lastElement,
              })}
            >
              {item.icon}
            </div>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
