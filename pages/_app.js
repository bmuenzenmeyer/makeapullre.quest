import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer"

import styles from "./app.module.css";

function Application({ Component, pageProps }) {
  return (
    <div className={styles.app_container}>
      <Nav />
      <main className="theme page">
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  );
}

export default Application;
