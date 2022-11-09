import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { setCookie } from "cookies-next";

const Navbar = () => {
  const [currentToken, setCurrentToken] = useState({});
  const router = useRouter();
  const createPostBtnref = useRef(null);
  const getLocalStorageItem = (key) => {
    return typeof window !== undefined
      ? window.localStorage.getItem(key)
      : null;
  };
  const logoutHandler = () => {
    setCurrentToken({
      token: window.localStorage.removeItem("token"),
    });
    setCookie("userId", null);
    window.location = "/";
  };

  useEffect(() => {
    setCurrentToken({
      token: getLocalStorageItem("token"),
    });
  }, []);
  return (
    <nav className="navbar-container">
      <div
        className="navbar-title"
        onClick={() => {
          router.push("/");
        }}
      >
        MM16STUDIO
      </div>
      <div
        className="navbar-title_01"
        onClick={() => {
          router.push("/");
        }}
      >
        Webboard
      </div>
      {currentToken.token ? null : (
        <Link href="/login">
          <div className={"navbar-text-login"}>Login</div>
        </Link>
      )}
      {currentToken.token ? null : (
        <Link href="/register">
          <div className={"navbar-text-register"}>Register |</div>
        </Link>
      )}
      {router.pathname === "/userpanel" ? null : (
        <div
          ref={createPostBtnref}
          className="navbar-text-createpost"
          onClick={() => {
            window.location = "/userpanel";
          }}
          style={{ right: currentToken.token ? "140px" : "295px" }}
        >
          CreatePost |
        </div>
      )}
      {currentToken.token ? (
        <div className="navbar-text-logout" onClick={logoutHandler}>
          Logout
        </div>
      ) : null}
      <span className="navbar-bg">
        <span className="navbar-bg-nested"></span>
      </span>
    </nav>
  );
};

export default Navbar;
