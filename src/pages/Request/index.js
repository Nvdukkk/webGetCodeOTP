// vấn đề timeCount

// thư viện
import classNames from "classnames/bind";
import { useState } from "react";

import Countdown from 'react-countdown';
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// file
import styles from "./Request.module.scss";
import SelectService from "./SelectService";
const cx = classNames.bind(styles);

const toastCopySuccess = () =>
  toast.success("Đã copy!", {
    pauseOnHover: false,
  });
const toastTimeOut = () =>
  toast.error("Sim đã hết thời gian thuê", {
    pauseOnHover: false,
});

function Request() {

  const [tableData, setTableData] = useState([]);

  const getSelectData = (data) => {
    setTableData((prev) => {
      if (prev.length > 0)
        return [
          ...prev,
          {
            ...data,
            timeCount: 123,
            createDate: new Date(),
            OTP: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
            phonenumber : "0" +
              Math.floor(Math.random() * (10 - 7) + 7) +
              Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000),
          },
        ];
      return [
        {
          ...data,
          timeCount: 123,
          createDate: new Date(),
          OTP: Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
          phonenumber : "0" +
            Math.floor(Math.random() * (10 - 7) + 7) +
            Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000),
        },
      ];
    });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("content-service")}>
        <SelectService getSelectData={getSelectData} />
      </div>

      <section>
        <div className="top-red-box padding-red-box">
          <thead>
            <tr>
              <th>Tên dịch vụ</th>
              <th>Giá</th>
              <th>Số điện thoại</th>
              <th>OTP</th>
              <th>Thời gian</th>
              <th>Tạo lúc</th>
            </tr>
          </thead>
          {tableData.length > 0 &&
            tableData.map(
              ({
                value: { name, price, id, duration },
                phonenumber,
                OTP,
                createDate,
                timeCount,
              }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <CopyToClipboard
                      text={phonenumber}
                      onCopy={() => toastCopySuccess()}
                    >
                      <span>{phonenumber}</span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <CopyToClipboard
                      text={OTP}
                      onCopy={() => toastCopySuccess()}
                    >
                    <span>{OTP}</span>
                    </CopyToClipboard>
                  </td>
                  <td>
                    <Countdown
                      date={Date.now() + timeCount}
                      intervalDelay={1000}
                      precision={0}
                      onComplete={() => toastTimeOut()}
                      renderer={props => <div>{props.total}</div>}>
                    </Countdown>
                  </td>
                  <td>
                    {createDate.toLocaleString("en-US", {
                      hour12: false,
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </td>
                </tr>
              )
            )}
        </div>
      </section>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Request;
