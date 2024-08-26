import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setuserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("useContext must be used within a UserContextProvider");
  }

  const { setUser } = userContext;

  const handleSubmit = () => {
    setUser({ userName });
  };
  return (
    <div>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        {" "}
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
