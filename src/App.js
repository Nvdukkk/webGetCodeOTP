// Không isLogin thì không vào được register

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  useEffect(() => {
    if (!isLogin) navigate("/Login");
    if (pathname === "/Login" && isLogin) localStorage.removeItem("isLogin");
  }, [pathname]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
