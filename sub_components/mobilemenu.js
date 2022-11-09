import Image from "next/image";
import { forwardRef, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import getUserauth from "../jwt_auth/getUserAuth";

import mm16grid from "../assets/images/mm16grid.png";
import { Appcontext } from "../pages/_app";

const Mobilemenu = forwardRef((probs, mobilemenuref) => {
  const router = useRouter();
  const appcontext = useContext(Appcontext);
  const [currentToken, setCurrentToken] = useState({});

  const getLocalStorageItem = (key) => {
    return typeof window !== undefined
      ? window.localStorage.getItem(key)
      : null;
  };

  const routeAuth = () => {
    if (currentToken.token) {
      if (
        getUserauth().then((result) => {
          if (result.data.status === "error") {
            localStorage.clear();
            window.location = "/";
          }
        })
      );
    }
  };

  useEffect(() => {
    routeAuth();
    setCurrentToken({
      token: getLocalStorageItem("token"),
    });
  }, []);
  return (
    <div className="mobilemenu" ref={mobilemenuref}>
      {router.pathname === "/userpanel" ? null : (
        <p
          onClick={() => {
            window.location = "/userpanel";
          }}
        >
          Createpost
        </p>
      )}

      {router.pathname === "/userpanel" || currentToken.token ? null : (
        <p
          style={{ top: "150px" }}
          onClick={() => {
            router.push("/login");
            mobilemenuref.current.classList.toggle("active");
            appcontext.hambergermenuref.current.classList.toggle("active");
          }}
        >
          LOGIN
        </p>
      )}
      {router.pathname === "/userpanel" || currentToken.token ? null : (
        <p
          style={{ top: "250px" }}
          onClick={() => {
            router.push("/register");
            mobilemenuref.current.classList.toggle("active");
            appcontext.hambergermenuref.current.classList.toggle("active");
          }}
        >
          REGISTER
        </p>
      )}
      {currentToken.token ? (
        <p
          style={{ top: "150px" }}
          onClick={() => {
            setCurrentToken({
              token: localStorage.removeItem("token"),
            });
            window.location = "/";
            mobilemenuref.current.classList.toggle("active");
            appcontext.hambergermenuref.current.classList.toggle("active");
          }}
        >
          LOGOUT
        </p>
      ) : null}
      <div className="image-warper">
        <Image src={mm16grid} layout="fixed"></Image>
      </div>
    </div>
  );
});
export default Mobilemenu;
