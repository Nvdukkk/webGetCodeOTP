import { NavLink } from "react-router-dom";
import { faList, faSignOut  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./HeaderNavbar.module.scss";
import avatar from "./pussycat.jpg";

const cx = classNames.bind(styles);

const logout = () => localStorage.removeItem("isLogin");

function HeaderNavbar() {
  const userData = localStorage.getItem("data");
  const nameData = JSON.parse(userData).name;

  return (
    <div className={cx("header-navbar")}>
      <button className={cx("isMobile")}>
     
        <FontAwesomeIcon icon={faList} />
      
      </button>
      <div className={cx("header-ul")}>
        <div className={cx("header-items")}>27,600 VNĐ</div>
        <div className={cx("header-items isDesktop")}>
          <img src={avatar} alt="avatar" className={cx("header-avatar")}></img>
          {nameData}
        </div>
        <NavLink to="/Login" onClick={logout}>
          <div className={cx("header-items")}>
            <FontAwesomeIcon icon={faSignOut} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderNavbar;
