'use client';
import styles from "./page.module.css";
import Link from "next/link";
import { useAuth } from "../component/AuthContext";

export default function Home() {

  const { isLoggedIn} = useAuth();

  return (
    <div className={styles['hero-container']}>
      <canvas className={styles.starfield}></canvas>

      <div className={styles['hero-content']}>
        <h1>ASTRONOVA</h1>
        <p>Beyond Orbits Within minds - Where curiosity escapes gravity</p>
        <div className={styles['hero-buttons']}>
          <Link href="/schedule"><button className={styles['hero-btn']}>Explore Events</button></Link>
          <Link href={"/account" + (!isLoggedIn ? "/register" : "")}><button className={styles['hero-btn']}>Register Now</button></Link>
        </div>
      </div>
    </div>
  );
}
