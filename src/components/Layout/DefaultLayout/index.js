// thư viện
import classNames from "classnames/bind";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";

//file
import Header from "./Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);
const sideBarClassname = cx({
  "sidebar": true,
  "active" : true,
})

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
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
