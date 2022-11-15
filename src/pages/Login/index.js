import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const userData = localStorage.getItem("data");
    const loginData = JSON.parse(userData);

    if (userData === null) {
      alert("Vui lòng đăng ký tài khoản");
      navigate("/Register");
    } else if (
      loginData.username === data.username &&
      loginData.password === data.password
    ) {
      navigate("/Dashboard");
      localStorage.setItem("isLogin", 1);
    } else if (
      loginData.username !== data.username &&
      loginData.password !== data.password
    ) {
      alert("Tài khoản không tồn tại");
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu");
    }
    reset();
  };

  return (
    <div className="user-login-register">
      <div className="login-box">
        <div className="login-box-body">
          <p>Đăng nhập tài khoản</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Tên tài khoản..."
                className="form-control"
                {...register("username", {
                  required: "Vui lòng nhập tên tài khoản",
                })}
              ></input>

              {errors.username && (
                <span className="form-message">{errors.username.message}</span>
              )}
            </div>

            <div className="form-group">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Mật khẩu..."
                className="form-control"
                {...register("password", {
                  required: "Vui lòng nhập mật khẩu",
                  minLength: {
                    value: 6,
                    message: "Mật khẩu tối thiểu 6 kí tự",
                  },
                })}
              />

              {errors.password && (
                <span className="form-message">{errors.password.message}</span>
              )}
            </div>

            <button to={"/Request"} class="btn-click">
              Đăng nhập
            </button>
          </form>
          <hr></hr>
          Chưa có tài khoản?
          <NavLink to="/Register" className="href">
            Đăng ký tài khoản
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
