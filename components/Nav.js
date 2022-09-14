import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

import translations from "../content/translations";
import LocaleSwitcher from "@components/LocaleSwitcher";

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

  if (!t) {
    return <>...</>;
  }

  const links = [];
  for (const key in t?.nav) {
    links.push(
      <Link href={key === "home" ? "/" : key}>
        <a>{t?.nav[key]}</a>
      </Link>
    );
  }

  return (
    <nav>
      {links}
      <LocaleSwitcher />
    </nav>
  );
}
