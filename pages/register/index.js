import { useEffect, useRef, useState } from "react";

const Register = () => {
  const emailRef = useRef();
  const usernameRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const Jsondata = {
      username: username,
      email: email,
      password: password,
    };
    setUsername("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="register-page-container">
      <form method="post" onSubmit={handleSubmit}>
        <div className="register-inputcontainer">
          <label htmlFor="email-input">Enter your email</label>
          <input
            className="inputborder"
            id="email-input"
            type="email"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <label htmlFor="password-input">Enter your password</label>
          <input
            className="inputborder"
            id="password-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          ></input>
          <label htmlFor="username-input" id="username-input-label">
            Enter your Username
          </label>
          <input
            className="inputborder"
            id="username-input"
            type="text"
            ref={usernameRef}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          ></input>
          <input id="register-submitbtn" type="submit" value="Register"></input>
        </div>
      </form>
      <div id="home-page-bg">
        <span id="home-page-bg-nested"></span>
      </div>
    </div>
  );
};

export default Register;
