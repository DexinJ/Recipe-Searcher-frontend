import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about-me">
        <img src="images/head.jpg" className="footer__image" alt="Author" />
        <div className="footer__texts">
          <div className="footer__title">About Me</div>
          <div className="footer__text">
            Hello, I am Tony Jin, a full-stack software developer skilled in
            ReactJS, JavaScript, HTML, CSS, NodeJS, ExpressJS, MongoDB, and
            Google Cloud Platform.
          </div>
        </div>
      </div>
      <div className="footer__credits">
        <div className="footer__text-grey">
          © 2023 Tony Jin, Powered by Spoonacular API
        </div>
        <div className="footer__buttons">
          <NavLink exact to="/" className="footer__button" id="home">
            Home
          </NavLink>
          <a
            className="footer__button"
            href="https://tonyjin.xyz/"
            target="_blank"
          >
            Portfolio
          </a>
          <a
            className="footer__button footer__button-github"
            href="https://github.com/DexinJ"
            target="_blank"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
