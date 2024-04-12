import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Instagram_logo.svg"
        alt=""
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>홈</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>검색</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>탐색</span>
        </button>
        <button className="sidenav__button">
          <TelegramIcon />
          <span>메시지</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>알림</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span>더 보기</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
