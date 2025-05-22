import React from "react";
import "./Main.css";
import { Link } from "react-scroll";

const Main = () => {
  return (
    <div>
      <header>
        <nav class="navbar">
          <ul>
            <li>
              <Link class="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="articles" smooth={true} duration={500}>
                Articles
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Main;
