import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <header>Make a Pull Request</header>
      <address>
        A slow-web project by{" "}
        <Link href="https://brianmuenzenmeyer.com">
          <a>Brian Muenzenmeyer</a>
        </Link>
      </address>
      <Link href="https://github.com/bmuenzenmeyer/makeapullre.quest">
        <a>GitHub</a>
      </Link>
    </footer>
  );
};

export default Footer;
