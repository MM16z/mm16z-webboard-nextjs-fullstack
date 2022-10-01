import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [usernamestate, setUsernameState] = useState("AnonymousSSSSSSSS");

  return (
    <nav className="navbar-container">
      <Link href="/">
        <div className="navbar-title">MM16STUDIO</div>
      </Link>
      <Link href="/">
        <div className="navbar-title_01">Webboard</div>
      </Link>
      <div className="navbar-userstate">
        /Home, Howdy! :D @User : {usernamestate}
      </div>
      <Link href="/login">
        <div className="navbar-text-login">Login</div>
      </Link>
      <Link href="/register">
        <div className="navbar-text-register">Register |</div>
      </Link>
      <span className="navbar-bg">
        <span className="navbar-bg-nested"></span>
      </span>
    </nav>
  );
};

export default Navbar;
