// Đã code xong
// Đã code xong
// Đã code xong

import classNames from "classnames/bind";
import styles from "./Password.module.scss";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const cx = classNames.bind(styles);

function Password() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const password = useRef({});
  password.current = watch("newpass", "");

  const userData = localStorage.getItem("data");
  const loginData = JSON.parse(userData);
  const userCurrentPass = loginData.password;

  const onSubmit = (data) => {
    const newData = data.newpass;
    if (userData === null) {
      alert("Vui lòng đăng ký tài khoản");
      window.location.href = "/Register";
    } else if (data.currentpass === userCurrentPass) {
      loginData["password"] = newData;
      loginData["repassword"] = newData;
      localStorage.setItem("data", JSON.stringify(loginData));
      alert("Đổi mật khẩu thành công");
      reset();
    } else {
      alert("Sai mật khẩu hiện tại");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <section className="top-red-box">
        <div className={cx("box-header")}>Đổi mật khẩu</div>

        <div className={cx("box-body")}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cx("form-horizontal")}
          >
            <div className={cx("form-group")}>
              <div className={cx("control-label", "col-sm-4")}>
                Mật khẩu hiện tại
              </div>
              <div className={cx("col-sm-5")}>
                <input
                  id="currentpass"
                  type="text"
                  name="currentpass"
                  className={cx("form-control")}
                  {...register("currentpass", {
                    required: "Vui lòng nhập mật khẩu hiện tại!",
                  })}
                ></input>
              </div>
              {errors.currentpass && (
                <div className={cx("form-message")}>
                  {errors.currentpass.message}
                </div>
              )}
            </div>

            <div className={cx("form-group")}>
              <div className={cx("control-label", "col-sm-4")}>
                Mật khẩu mới
              </div>
              <div className={cx("col-sm-5")}>
                <input
                  id="newpass"
                  type="text"
                  name="newpass"
                  className={cx("form-control")}
                  {...register("newpass", {
                    required: "Vui lòng nhập mật khẩu mới!",
                    minLength: {
                      value: 6,
                      message: "Mật khẩu tối thiểu 6 kí tự",
                    },
                  })}
                ></input>
              </div>
              {errors.newpass && (
                <div className={cx("form-message")}>
                  {errors.newpass.message}
                </div>
              )}
            </div>

            <div className={cx("form-group")}>
              <div className={cx("control-label", "col-sm-4")}>
                Nhập lại mật khẩu mới
              </div>
              <div className={cx("col-sm-5")}>
                <input
                  id="repassword"
                  type="text"
                  name="repassword"
                  className={cx("form-control")}
                  {...register("repassword", {
                    required: "Vui lòng nhập lại mật khẩu mới!",
                    validate: (value) =>
                      value === password.current || "Mật khẩu không khớp",
                  })}
                ></input>
              </div>
              {errors.repassword && (
                <div className={cx("form-message")}>
                  {errors.repassword.message}
                </div>
              )}
            </div>

            <div className={cx("straight-line")}>
              <button className={cx("btn")}>Đổi mật khẩu</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Password;
