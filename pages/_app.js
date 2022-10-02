import "../assets/sass/_app.scss";
import "../assets/sass/pages_style/home.scss";
import "../assets/sass/pages_style/login.scss";
import "../assets/sass/pages_style/register.scss";

import "../assets/sass/sub_components_style/navbar.scss";
import "../assets/sass/sub_components_style/post-box-container.scss";
import "../assets/sass/sub_components_style/hambergermenu.scss";
import "../assets/sass/sub_components_style/reply-box-container.scss";
import "../assets/sass/sub_components_style/heartbtn.scss";

import Navbar from "../sub_components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="_app">
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
