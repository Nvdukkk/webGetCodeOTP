import { faPlus, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// thư viện
import classNames from "classnames/bind";
import styles from "./Request.module.scss";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// file
import ListService from "./ListService";

const cx = classNames.bind(styles);

const toastSuccess = () =>
  toast.success("Tạo yêu cầu thành công!", {
    pauseOnHover: false,
  });

const toastWarn = () =>
  toast.warn("Vui lòng chọn dịch vụ!", {
    pauseOnHover: false,
  });

function SelectService({ getSelectData }) {
  const [selectData, setSelectData] = useState({});

  const addData = () => {
    if (Object.values(selectData).length > 0) {
      getSelectData(selectData);
      toastSuccess();
    } else {
      toastWarn();
    }
  };

  return (
    <div>
      <button className={cx("dropdown-btn")}>
        <FontAwesomeIcon icon={faSortDown} className={cx("dropdown-icon")} />
      </button>

      <button onClick={addData} className={cx("content-create")}>
        <FontAwesomeIcon icon={faPlus} />
        Tạo yêu cầu
      </button>
      <div className={cx("content-service-select")}>
        <ListService setSelectData={setSelectData} />
      </div>
    </div>
  );
}

export default SelectService;
