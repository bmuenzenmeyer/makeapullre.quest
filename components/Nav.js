import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import translations from "../content/translations";

import styles from "./Nav.module.css";

export default function Nav() {
  const { locale } = useRouter();
  const translation = translations(locale);
  const [t, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslation = async () => {
      const ts = await translation;
      setTranslations(ts);
    };
    fetchTranslation();
  }, [locale]);

  if (!t || !t.nav) {
    return <>...</>;
  }

  const links = [];
  Object.entries(t?.nav).forEach(([key, value]) => {
    links.push(
      <Link href={key === "home" ? "/" : `/` + key}>
        <a>{key}</a>
      </Link>
    );
  });

  return (
    <nav className={styles.header__nav}>
      {links}
      {/* <LocaleSwitcher /> */}
    </nav>
  );
}
