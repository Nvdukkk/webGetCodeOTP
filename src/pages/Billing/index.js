import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Billing.module.scss";
import MomoModal from "./Modal/MomoModal";
import VpModal from "./Modal/VpModal";
import TechModal from "./Modal/TechModal";
const cx = classNames.bind(styles);

function Billing() {
  const [momoIsOpen, setMomoIsOpen] = useState(false);
  const [vpIsOpen, setVpIsOpen] = useState(false);
  const [techIsOpen, setTechIsOpen] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <section className={cx("content")}>
        <div className={cx("col-lg-4 col-sm-6 col-xs-12")}>
          <div className={cx("small-box text-momo")}>
            <div className={cx("inner")}>
              <h3>MoMo</h3>
              <p>
                Chủ thẻ: <strong> Nguyen Van Duc </strong>
                <br></br>
                Loại: <strong> Tự động </strong>
              </p>
            </div>
            <button
              onClick={() => setMomoIsOpen(true)}
              className={cx("small-box-btn bg-momo")}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className={cx("col-lg-4 col-sm-6 col-xs-12")}>
          <div className={cx("small-box text-green")}>
            <div className={cx("inner")}>
              <h3>VpBank</h3>
              <p>
                Chủ thẻ: <strong> Nguyen Van Duc </strong>
                <br></br>
                Loại: <strong> Tự động </strong>
              </p>
            </div>
            <button
              className={cx("small-box-btn bg-green")}
              onClick={() => setVpIsOpen(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
        <div className={cx("col-lg-4 col-sm-6 col-xs-12")}>
          <div className={cx("small-box text-techcombank")}>
            <div className={cx("inner")}>
              <h3>Techcom</h3>
              <p>
                Chủ thẻ: <strong> Nguyen Van Duc </strong>
                <br></br>
                Loại: <strong> Tự động </strong>
              </p>
            </div>
            <button
              className={cx("small-box-btn bg-techcombank")}
              onClick={() => setTechIsOpen(true)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </section>

      <MomoModal openModal={momoIsOpen} setIsOpen={setMomoIsOpen} />
      <TechModal openModal={techIsOpen} setIsOpen={setTechIsOpen} />
      <VpModal openModal={vpIsOpen} setIsOpen={setVpIsOpen} />
    </div>
  );
}

export default Billing;
