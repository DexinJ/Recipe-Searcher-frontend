import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
import author from "../../images/head.jpg";
import github from "../../images/github.svg";
function Footer() {
  return (
    <footer className="footer">
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
          © 2023 Tony Jin, Powered by Spoonacular API
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
            className="footer__button "
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
