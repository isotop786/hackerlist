import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>HackerList | Home</title>
        <meta name="keywords" content='hackers'/>
      </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi veritatis sint dolore minima veniam tenetur nisi facere cumque fugit voluptatem beatae eos, fugiat maiores illo enim eaque voluptatum iste.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus excepturi veritatis sint dolore minima veniam tenetur nisi facere cumque fugit voluptatem beatae eos, fugiat maiores illo enim eaque voluptatum iste.</p>
      <Link  href="/hackers/">
        <a className={styles.btn}>Hacker List</a>
      </Link>
    </div>
    </>
  )
}
