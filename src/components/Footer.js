import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <ul>
          <li>
            <NavLink className={styles.footerlink} to="/">
              Tesla
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              &copy; 2021
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              Privacy & legal
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              Carrers
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              Engage
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.footerlink} to="/">
              Locations
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Footer;
