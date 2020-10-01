import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Link href="/blog" as="/blog">
        <a className={styles.routesLink}>Blog</a>
      </Link>
      <Link href="/slug" as="/slug">
        <a className={styles.routesLink}>Slug</a>
      </Link>
      <div className={styles.container}>Welcome</div>
    </div>
  );
}
