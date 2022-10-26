import Head from "next/head";
import Link from "next/link";

import translations from "../content/translations";

import styles from "./index.module.css";

export default function Home({ t }) {
  const links = [];
  Object.entries(t?.nav).forEach(([key, value]) => {
    if (key !== "home") {
      links.push(
        <article className={styles.post} key={`post_${key}`}>
          <header className={styles.post__header}>{value.name}</header>
          <p className={styles.post__lede}>{value.lede}</p>
          <Link href={key === "home" ? "/" : `/` + key}>
            <a className={styles.post__link}>Read more.</a>
          </Link>
        </article>
      );
    }
  });

  return (
    <div className="page">
      <Head>
        <title>{t?.nav?.home.name}</title>
      </Head>
      <h1>Make a Pull Request...</h1>
      <small className={styles.home__lede}>{t?.welcome}</small>
      <nav className={styles.home__nav}>{links}</nav>
    </div>
  );
}

export async function getStaticProps(context) {
  const translation = await translations(context.locale);
  return {
    props: {
      t: translation,
    },
  };
}
