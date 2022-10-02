import { useEffect, useRef, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Jsondata = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <div className="login-page-container">
      <form method="post" onSubmit={handleSubmit}>
        <div className="login-inputcontainer">
          <label htmlFor="email-input">Enter your email :D</label>
          <input
            className="inputborder"
            id="email-input"
            type="email"
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          ></input>
          <label htmlFor="password-input">Enter your password :V</label>
          <input
            className="inputborder"
            id="password-input"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          ></input>
          <input id="login-submitbtn" type="submit" value="Login"></input>
        </div>
      </form>
      <div id="home-page-bg">
        <span id="home-page-bg-nested"></span>
      </div>
    </div>
  );
};

export default Login;
