// thư viện
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";

//file
import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
