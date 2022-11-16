
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  useEffect(() => { 
    if (!isLogin) {
      if (pathname === "/Billing") {
        navigate("/Login")
      }
      if (pathname === "/Request") {
        navigate("/Login")
      }
      if (pathname === "/Dashboard") {
        navigate("/Login")
      }
      if (pathname === "/History") {
        navigate("/Login")
      }
      if (pathname === "/Profile") {
        navigate("/Login")
      }
      if (pathname === "/Password") {
        navigate("/Login")
      }
      if (pathname === "/") {
        navigate("/Login")
      }
    } 
    if (pathname === "/Login" && isLogin) localStorage.removeItem("isLogin");
  }, [pathname]);

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
