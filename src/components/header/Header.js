import React, { useState } from "react";
import header from "./Header.module.css";
import { Link } from "react-scroll";
import { ArrowForward, Menu, Close } from "@mui/icons-material";
import resume from "../../assets/Mohamed's Resume.pdf";

const Header = () => {
  const [headerOption, setHeaderOption] = useState("");
  const [icon, setIcon] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handelIcon = () => {
    setIcon(!icon);
  };

  const exit = () => {
    setIcon(false);
  };

  const navBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navBackground);

  return (
    <div className={header.container}>
      <nav
        className={`${
          navbar ? `${(header.head, header.active)}` : `${header.head}`
        }`}
      >
        <h1 className={header.title}>thawfeek</h1>

        <div className={header.icons} onClick={handelIcon}>
          {icon ? (
            <Close className={header.menuIcons} />
          ) : (
            <Menu className={header.menuIcons} />
          )}
        </div>
        <div>
          <ul
            className={`${
              icon
                ? `${(header.nav_menu, header.nav_menu_active)}`
                : `${header.nav_menu}`
            }  `}
          >
            <li>
              <Link
                to="about"
                smooth={true}
                duration={2000}
                className={` ${
                  headerOption === "about"
                    ? `${header.header__option_active} `
                    : null
                } `}
                onClick={() => {
                  setHeaderOption("about");
                  exit();
                }}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="service"
                smooth={true}
                duration={2000}
                className={` ${
                  headerOption === "service"
                    ? `${header.header__option_active} `
                    : null
                } `}
                onClick={() => {
                  setHeaderOption("service");
                  exit();
                }}
              >
                service
              </Link>
            </li>

            <li>
              <Link
                to="project"
                smooth={true}
                duration={2000}
                className={` ${
                  headerOption === "project"
                    ? `${header.header__option_active} `
                    : null
                } `}
                onClick={() => {
                  setHeaderOption("project");
                  exit();
                }}
              >
                project
              </Link>
            </li>

            <li>
              <Link
                to="blog"
                smooth={true}
                duration={2000}
                className={` ${
                  headerOption === "blog"
                    ? `${header.header__option_active} `
                    : null
                } `}
                onClick={() => {
                  setHeaderOption("blog");
                  exit();
                }}
              >
                blog
              </Link>
            </li>

            <li>
              <Link
                to="contact"
                smooth={true}
                duration={2000}
                className={` ${
                  headerOption === "contact"
                    ? `${header.header__option_active} `
                    : null
                } `}
                onClick={() => {
                  setHeaderOption("contact");
                  exit();
                }}
              >
                <span className={header.contact}>
                  book a call <ArrowForward className={header.arrow} />
                </span>
              </Link>
            </li>
            <div className={header.btn}>
              <a
                href={resume}
                download="my_resume"
                className={header.nav_links}
                onClick={exit}
              >
                Download CV
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
