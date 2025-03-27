import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      dispatch(login(username));

    }
  };

  return (
    <div className="auth-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
