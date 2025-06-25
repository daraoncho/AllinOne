import { useToggle } from "../../hooks/useToggle";
import IconRenderer from "../UI/IconRenderer";
import HamburgerMenu from "./HamburgerMenu";
import styles from "../../styles/Layout/Header.module.css";

const Header = () => {
  const { value: isMenuOpen, toggle: toggleMenu, setFalse: closeMenu } = useToggle();

  return (
    <>
      <header className={styles.header}>
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
        >
          <IconRenderer name="share" size="20px" />
        </button>
      </header>

      <HamburgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
