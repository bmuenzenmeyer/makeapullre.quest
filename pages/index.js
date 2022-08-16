import Head from "next/head";
import Link from "next/link";

import translations from "../content/translations";

export default function Home({ t }) {
  return (
    <>
      <Head>
        <title>{t?.nav?.home}</title>
      </Head>
      <main>
        <div>{t?.welcome}</div>
        <h2>Make a pull request</h2>
        <nav>
          <article>
            <Link href="/early">
              <a>{t?.nav?.early}</a>
            </Link>
          </article>
        </nav>
      </main>
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
