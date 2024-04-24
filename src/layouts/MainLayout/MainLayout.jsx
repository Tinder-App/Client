import React from "react";
import styles from "./MainLayout.module.scss";
import Navigation from "../../layouts/MainLayout/Navigation/Navigation";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const MainLayout = ({ children }) => {
  return (
    <div className={cx("main-layout")}>
      <div className={cx("main-layout__content")}> {children}</div>

      <div className={cx("main-layout__navigation")}>
        <Navigation />
      </div>
    </div>
  );
};

export default MainLayout;
