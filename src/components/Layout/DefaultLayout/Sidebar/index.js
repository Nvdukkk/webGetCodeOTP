import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import SIDEBAR from "./services";
import classNames from "classnames/bind";
import styles from "./Sidebar.scss";

const cx = classNames.bind(styles);

function Sidebar() {
  const renderChildren = (item) => {
    return item.map(({ id, href, icon, name }) => (
      <NavLink key={id} to={href}>
        <div className={cx("sidebar-btn")}>
          <FontAwesomeIcon icon={icon} />
          {name}
        </div>
      </NavLink>
    ));
  };

  return (
    <aside className={cx("wrapper isDesktop")}>
      {SIDEBAR.map(({ id, title, children }) => (
        <div key={id}>
          <div className={cx("header")}>{title}</div>
          {renderChildren(children)}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
