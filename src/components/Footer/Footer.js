import {
  NavLink,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
import author from "../../images/head.jpg";
import github from "../../images/github.svg";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Footer({ main }) {
  const [mainHeight, setmainHeight] = useState(0);
  const { width, height } = useWindowDimensions();
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname === "/";

  useEffect(() => {
    setmainHeight(856 + main.current.clientHeight);
  });

  const footerPadding = currentLocation
    ? `${width > 800 ? Math.max(24, height - mainHeight) : 24}px ${
        width > 800 ? "104px" : "0"
      } 24px`
    : "24px 104px";

  return (
    <footer className="footer" style={{ padding: footerPadding }}>
      <div className="footer__about-me">
        <img src={author} className="footer__image" alt="Author" />
        <div className="footer__texts">
          <h4 className="footer__title">About Me</h4>
          <p className="footer__text">
            Hello, I am Tony Jin, a full-stack software developer skilled in
            ReactJS, JavaScript, HTML, CSS, NodeJS, ExpressJS, MongoDB, and
            Google Cloud Platform.
          </p>
        </div>
      </div>
      <div className="footer__credits">
        <p className="footer__text-grey">
          © 2023 Tony Jin, Powered by{" "}
          <a
            className="footer__text-grey"
            href="https://spoonacular.com/food-api"
            target="_blank"
          >
            Spoonacular API
          </a>
        </p>
        <div className="footer__buttons">
          <NavLink exact to="/" className="footer__button" id="home">
            Home
          </NavLink>
          <a
            className="footer__button"
            href="https://tonyjin.xyz/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
          <a
            className="footer__button"
            href="https://github.com/DexinJ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="Github" className="footer__button-github" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
