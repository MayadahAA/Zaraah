import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, setIsRegister] = useState(false);

  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (username.length < 6 || password.length < 8) {
      alert("Username should be at least 6 characters and password should be at least 8 characters");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setIsRegister(true);
    alert("successful!");
  };

  return (
    <>
      <h1>Sign Up</h1>
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submit}>Sign Up</button>
      </div>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </>
  );
}

export default Signup;
