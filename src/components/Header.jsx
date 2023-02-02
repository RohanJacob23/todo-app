import React from "react";
import sunIcon from "../images/icon-sun.svg";
import moonIcon from "../images/icon-moon.svg";
import bgDeskTopDark from "../images/bg-desktop-dark.jpg";
import bgMobileDark from "../images/bg-mobile-dark.jpg";
import bgDeskTopLight from "../images/bg-desktop-light.jpg";
import bgMobileLight from "../images/bg-mobile-light.jpg";
import { useState } from "react";

function Header() {
  // created an object to change the icon, background image and class according to the theme
  console.log(window.innerWidth);
  const mode = {
    dark: {
      icon: sunIcon,
      class: "dark",
      bg: window.innerWidth <= 425 ? bgMobileDark : bgDeskTopDark,
    },
    light: {
      icon: moonIcon,
      class: "light",
      bg: window.innerWidth <= 425 ? bgMobileLight : bgDeskTopLight,
    },
  };
  // using useState hook to render the page after udpating the theme
  const [theme, setTheme] = useState(mode.dark);

  const body = document.body;

  // function to change the theme
  const themeHandler = () => {
    if (theme.class === "dark") {
      body.classList.remove(mode.dark.class);
      body.classList.add(mode.light.class);
      setTheme(mode.light);
    } else {
      body.classList.remove(mode.light.class);
      body.classList.add(mode.dark.class);
      setTheme(mode.dark);
    }
  };
  return (
    <div
      className="header h-80 text-4xl text-white font-semibold"
      style={{ backgroundImage: `url(${theme.bg})` }}
    >
      <div className="flex justify-between w-1/2 mx-auto pt-28">
        <h1>TODO</h1>
        <div>
          <img
            src={theme.icon}
            alt=""
            onClick={themeHandler}
            className="cursor-pointer w-fit max-w-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
