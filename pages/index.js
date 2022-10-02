import PostBoxContainer from "../sub_components/post-box-container";
import CommentBoxContainer from "../sub_components/comment-box-container";
import Hambergermenu from "../sub_components/hambergermenu";
import HeartBtn from "../sub_components/heartbtn";

import mm16grid from "../assets/images/mm16grid.png";

import Image from "next/image";
import Masonry from "react-masonry-css";

import { useRef, useState } from "react";
import { createContext } from "react";

export const Homecontext = createContext();
function Home() {
  const mobilemenu = useRef();
  const [usernamestate, setUsernameState] = useState("AnonymousSSSSSSSS");
  const [mobilemenuref, setMobilemenuRef] = useState(mobilemenu);
  const breakpointColumnsObj = {
    default: 4,
    1920: 3,
    1500: 2,
    1100: 1,
  };

  return (
    <Homecontext.Provider value={{ mobilemenuref }}>
      <div className="home-page-container">
        <Hambergermenu></Hambergermenu>
        <div className="userstate">
          /Home, Howdy! :D @User : {usernamestate}
        </div>
        <div className="masonry-warper">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <PostBoxContainer
              username="MM16Z MM16Z MM16Z MM16Z MM16Z MM16Z"
              title="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
              postcontent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              postdate="11/16/2022 17:09"
            >
              <HeartBtn />
              <CommentBoxContainer
                commentusername="MM16z"
                commentcontent="LOREM LOREM LOREM"
              />
              <CommentBoxContainer
                commentusername="MM16z"
                commentcontent="LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM"
              />
            </PostBoxContainer>
            <PostBoxContainer
              postcontent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              postdate="11/16/2022 17:09"
            >
              <CommentBoxContainer
                commentusername="MM16z"
                commentcontent="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
              />
              <CommentBoxContainer
                commentusername="MM16z"
                commentcontent="AMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUSAMOGUS"
              />
              <CommentBoxContainer
                commentusername="MM16z"
                commentcontent="LOREM LOREM LOREM"
              />
            </PostBoxContainer>
            <PostBoxContainer
              postcontent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              postdate="11/16/2022 17:09"
            ></PostBoxContainer>
          </Masonry>
        </div>
        <div id="home-page-bg">
          <span id="home-page-bg-nested"></span>
        </div>
        <div className="mobilemenu" ref={mobilemenu}>
          <p>PROFILE</p>
          <p style={{ top: "150px" }}>LOGIN</p>
          <p style={{ top: "250px" }}>REGISTER</p>
          <div className="image-warper">
            <Image src={mm16grid} layout="fixed"></Image>
          </div>
        </div>
      </div>
    </Homecontext.Provider>
  );
}

export default Home;
