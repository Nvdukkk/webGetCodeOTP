// Đã code xong
// Đã code xong
// Đã code xong

import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles);

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const userData = localStorage.getItem("data");
  const loginData = JSON.parse(userData);

  const onSubmit = (data) => {
    const newName = data.newName;
    const newEmail = data.newemail;
    if (newEmail !== "" && newName !== "") {
      loginData["name"] = newName;
      loginData["email"] = newEmail;
      localStorage.setItem("data", JSON.stringify(loginData));
      alert("Thay đổi thông tin thành công");
      window.location.href = "/Profile";
    } else if (newEmail !== "") {
      loginData["email"] = newEmail;
      localStorage.setItem("data", JSON.stringify(loginData));
      alert("Thay đổi email thành công");
      reset()
    } else if (newName !== "" && newName !== " ") {
      loginData["name"] = newName;
      localStorage.setItem("data", JSON.stringify(loginData));
      alert("Thay đổi tên thành công");
      window.location.href = "/Profile";
    }
  };

  return (
    <div className={cx("wrapper")}>
      <section className="top-red-box">
        <div className={cx("box-header")}>Thay đổi thông tin</div>

        <div className={cx("box-body")}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cx("form-horizontal")}
          >
            <div className={cx("form-group")}>
              <div className={cx("control-label", "col-sm-4")}>
                Tên tài khoản
              </div>
              <div className={cx("col-sm-5")}>
                <input
                  id="username"
                  type="text"
                  name="username"
                  disabled
                  value={loginData.username}
                  className={cx("form-control")}
                ></input>
              </div>
            </div>

            <div className={cx("form-group")}>
              <div className={cx("control-label", "col-sm-4")}>Email</div>
              <div className={cx("col-sm-5")}>
                <input
                  id="newemail"
                  type="text"
                  name="newemail"
                  placeholder={loginData.email}
                  className={cx("form-control")}
                  {...register("newemail", {
                    pattern: {
                      value: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
                      message: "Vui lòng nhập đúng định dạng email",
                    },
                  })}
                ></input>
              </div>
              {errors.newemail && (
                <div className={cx("form-message")}>
                  {errors.newemail.message}
                </div>
              )}
            </div>

            <div className={cx("form-group")}>
              <div className={cx("control-label", "col-sm-4")}>Họ tên</div>
              <div className={cx("col-sm-5")}>
                <input
                  id="newName"
                  type="text"
                  name="newName"
                  placeholder={loginData.name}
                  className={cx("form-control")}
                  {...register("newName")}
                ></input>
              </div>
              {errors.repassword && (
                <div className={cx("form-message")}>
                  {errors.repassword.message}
                </div>
              )}
            </div>

            <div className={cx("straight-line")}>
              <button className={cx("btn")}>Cập nhật thông tin</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Profile;
