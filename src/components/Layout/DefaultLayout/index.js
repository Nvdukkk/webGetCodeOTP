// thư viện
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";
import { useState } from "react";
//file
import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout() {
  const [data, setData] = useState(false);

  const handleData = () => {
    setData(!data);
  };

  const sideBarClassname = cx({
    sidebar: true,
    active: data,
  });

  return (
    <div className={cx("wrapper")}>
      <Header onClick={handleData}/>
      <div className={cx("container")}>
        <div className={sideBarClassname}>
          <Sidebar />
        </div>
        <div className={cx("content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
