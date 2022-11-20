import Head from "next/head";
import styles from "../styles/Home.module.css";
import Logo from "../components/UiElements";
import { Btn } from "../components/UiElements";

export default function Home() {
  return (<div className={styles.container}>
    <Head>
      <title>Viratwiz - About</title>
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome
        <Logo />!
      </h1>
      <Btn>Click Me!</Btn>
      <p className={styles.description}>Look around!</p>
    </main>
  </div>);
}
