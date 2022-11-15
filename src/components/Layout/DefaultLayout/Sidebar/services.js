import { faBarChart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faHistory,
  faMoneyBill,
  faTasks,
  faUnlock,
} from "@fortawesome/free-solid-svg-icons";

const SIDEBAR = [
  {
    id: 1,
    title: "Hệ thống",
    children: [
      {
        id: 1,
        href: "/Dashboard",
        icon: faBarChart,
        name: "Dashboard",
      },
      {
        id: 2,
        href: "/Request",
        icon: faTasks,
        name: "Thuê sim",
      },
    ],
  },
  {
    id: 2,
    title: "Nạp tiền",
    children: [
      {
        id: 1,
        href: "/Billing",
        icon: faMoneyBill,
        name: "Donate",
      },
      {
        id: 2,
        href: "/History",
        icon: faHistory,
        name: "Lịch sử donate",
      },
    ],
  },
  {
    id: 3,
    title: "Tài khoản",
    children: [
      {
        id: 1,
        href: "/Profile",
        icon: faUser,
        name: "Thông tin tài khoản",
      },
      {
        id: 2,
        href: "/Password",
        icon: faUnlock,
        name: "Đổi mật khẩu",
      },
    ],
  },
];

export default SIDEBAR;
