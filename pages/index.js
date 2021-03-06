import Head from 'next/head'
import AddressConverter from '../components/AddressConverter'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Astra Utilities</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/astra.svg" />
      </Head>

      <main className={styles.main}>
        <AddressConverter />
      </main>
    </div>
  )
}
