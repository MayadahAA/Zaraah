import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (username.length < 6) {
      alert("Username should be at least 6 characters and password should be at least 8 characters");
      return;
    }
    if (password.length < 8) {
      alert("Username should be at least 6 characters and password should be at least 8 characters");
      return;
    }
    const Susername = localStorage.getItem("username");
    const Spassword = localStorage.getItem("password");
    if (username === Susername && password === Spassword) {
      setIsLogIn(true);
      alert("successful!");
      // console.log('loggged');
      localStorage.setItem('logged', 'logged')
      window.location.href = "/";
      
    } else {
      alert("false");
    }
  };
  return (
    <>
      <h1>log in</h1>

      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isLogIn ? (
          <Link to="/"></Link>
        ) : (
          <button onClick={submit}>log in</button>
        )}
                Already have an account? <Link to="/Signup">sing up</Link>

      </div>
    </>
  );
}

export default Login;
