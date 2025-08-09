import { Link } from "react-router-dom";
import navigation from "@/components/PageLayout/modules/Navigation";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={`${styles.navsubbar} ${styles.left}`}>
        <div className={styles.logo}>Microchip GUI</div>

        {navigation
          .filter((value) => value.navbarAlignment === "left")
          .map(({ name, href }) => {
            return <Link to={href}>{name}</Link>;
          })}
      </div>

      <div className={styles.navsubbar}>
        {navigation
          .filter((value) => value.navbarAlignment === "right")
          .map(({ name, href }) => {
            return <Link to={href}>{name}</Link>;
          })}
      </div>
    </div>
  );
}
export default Navbar;
