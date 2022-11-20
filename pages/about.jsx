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
      <p className={styles.description}>Look around!</p>
      <Btn>Hello</Btn>
    </main>
  </div>);
}
