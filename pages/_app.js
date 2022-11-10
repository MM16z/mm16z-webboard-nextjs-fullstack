import "../assets/sass/_app.scss";
import "../assets/sass/pages_style/home.scss";
import "../assets/sass/pages_style/login.scss";
import "../assets/sass/pages_style/register.scss";
import "../assets/sass/pages_style/userpanel.scss";

import "../assets/sass/sub_components_style/navbar.scss";
import "../assets/sass/sub_components_style/post-box-container.scss";
import "../assets/sass/sub_components_style/hambergermenu.scss";
import "../assets/sass/sub_components_style/comment-box-container.scss";
import "../assets/sass/sub_components_style/heartbtn.scss";
import "../assets/sass/sub_components_style/mobilemenu.scss";

import Navbar from "../sub_components/navbar";
import Hambergermenu from "../sub_components/hambergermenu";
import Mobilemenu from "../sub_components/mobilemenu";
import { createContext, useRef } from "react";

export const Appcontext = createContext();
function MyApp({ Component, pageProps }) {
  const mobilemenuref = useRef();
  const hambergermenuref = useRef();

  return (
    <Appcontext.Provider value={{ hambergermenuref }}>
      <div className="_app">
        <Navbar />
        <Hambergermenu
          ref={hambergermenuref}
          onClick={() => {
            hambergermenuref.current.classList.toggle("active");
            mobilemenuref.current.classList.toggle("active");
          }}
        />
        <Mobilemenu ref={mobilemenuref} />
        <Component {...pageProps} />
      </div>
    </Appcontext.Provider>
  );
}

export default MyApp;
