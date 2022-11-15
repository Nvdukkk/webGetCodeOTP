import { NavLink } from "react-router-dom";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./HeaderNavbar.module.scss";
import avatar from './pussycat.jpg'

const cx = classNames.bind(styles);

const logout = () => localStorage.removeItem("isLogin");

function HeaderNavbar() {
  const userData = localStorage.getItem("data");
  const nameData = JSON.parse(userData).name;

  return (
    <ul className={cx("header-navbar")}>
      <li className={cx("header-items")}>27,600 VNĐ</li>
      <li className={cx("header-items")}>
        <img
          src={avatar}
          alt="avatar"
          className={cx("header-avatar")}
        ></img>
        {nameData}
      </li>
      <NavLink to="/Login" onClick={logout}>
        <li className={cx("header-items")}>
          <FontAwesomeIcon icon={faSignOut} />
        </li>
      </NavLink>
    </ul>
  );
}

export default HeaderNavbar;
