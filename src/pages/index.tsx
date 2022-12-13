import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home </title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <ul>
        <li>
          <Link href="/movies">Filmy</Link>
        </li>
        <li>
          <Link href="/characters">Postacie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
