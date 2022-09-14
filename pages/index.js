import Head from "next/head";
import Link from "next/link";

import translations from "../content/translations";

export default function Home({ t }) {
  const links = [];
  for (const key in t?.nav) {
    if (key !== "home") {
      links.push(
        <article>
          <Link href={key === "home" ? "/" : key}>
            <a>{t?.nav[key]}</a>
          </Link>
        </article>
      );
    }
  }

  return (
    <>
      <Head>
        <title>{t?.nav?.home}</title>
      </Head>
      <div>{t?.welcome}</div>
      <h2>Make a pull request</h2>
      <nav>{links}</nav>
    </>
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
