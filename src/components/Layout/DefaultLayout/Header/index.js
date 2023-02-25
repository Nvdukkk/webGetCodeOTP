import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import HeaderNavbar from "./HeaderNavbar";

const cx = classNames.bind(styles);

function Header(props) {
  const handleData = () => {
    const data = "";
    props.onClick(data);
  };
  return (
    <header className={cx("wrapper")}>
      <div className={cx("logo-brand")}>
        <a href="/Request">NvdukkCode</a>
      </div>

      <div className={cx("header-custom-menu")}>
        <div className={cx("header-run-in-text")}>
          <marquee>
            Mọi hành vi cố tình chọn sai dịch vụ để lọc tài khoản của khách sẽ
            bị khóa tài khoản vĩnh viễn.
          </marquee>
        </div>
      </div>

      <HeaderNavbar onClick={handleData} />
    </header>
  );
}

export default Header;
