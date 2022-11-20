import Head from "next/head";
import styles from "../styles/Home.module.css";
import Logo from "../components/UiElements";
export default function Home() {
  return (<div className={styles.container}>
    <Head>
      <title>Viratwiz</title>
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <Logo />!
      </h1>
      <p className={styles.description}>
        Look around!
      </p>
      <div className={styles.grid}>
        <a href="http://me.viratwiz.com" className={styles.card}>
          <h2>Personal Portfolio &rarr;</h2>
          <p>Learn a about me in this work in progress site of mine.</p>
        </a>

        <a href="https://github.com/virat2010" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about my other projects and my instrests in github.</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" className={styles.card}>
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  </div>);
}
