import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

import { Button } from 'components/features/Button';

import useClickOutside from "../../CustomHooks/ClickOutside";

const Navbar = ({ BurgerColour }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`/${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setIsNavOpen(false);
  });

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/">UPST8 EMPIRE</Link>
        </div>

        {/* NAV-BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColour }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FaBars />
          {/* <Button primary="true" round="round" big="true" to="/contact">
              Contact Us
          </Button> */}
        </div>

        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>

          {/* LI - MENULINK */}
          <MenuLink url="" path="Home" />
          <MenuLink url="buy" path="Buy" />
          <MenuLink url="rent" path="Rent" />
          <MenuLink url="search" path="Search" />
          <MenuLink url="about" path="About" />
          <Link to="/auth" className={styles.login}>
            <span>Login</span>
          </Link>
          <button className={styles.btn_search}>
            <Button to="contact" primary="true" big="true">
              Contact Us
            </Button>
          </button>
        </ul>

        {/* LOGIN */}
        <Link to="/auth" className={styles.login_container}>
          <span style={{ color: BurgerColour }}>Login</span>
          <BsArrowRight style={{ color: BurgerColour }} />
        </Link>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};

export default Navbar;
