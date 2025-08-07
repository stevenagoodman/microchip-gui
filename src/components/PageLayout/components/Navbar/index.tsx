import { Link } from "react-router-dom";
import navigation from "@/components/PageLayout/modules/Navigation";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navsubbar} ${styles.navbartabs}`}>
        {navigation
          .filter((value) => value.navbarAlignment === "left")
          .map(({ name, href }) => {
            return <Link to={href}>{name}</Link>;
          })}
      </div>

      <div className={`${styles.navsubbar} ${styles.navbarcontrols}`}>
        {navigation
          .filter((value) => value.navbarAlignment === "right")
          .map(({ name, href }) => {
            return <Link to={href}>{name}</Link>;
          })}
      </div>
    </nav>
  );
}
export default Navbar;
