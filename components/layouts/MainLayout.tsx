
import Head from 'next/head'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
export const MainLayout: FC<PropsWithChildren<{}>>= (props) => {
    const {children}:any= props;
    return (
        <div className={styles.container}>
          <Head>
            <title>About - Martin</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar/>
          <main className={styles.main}>
              {children}
          </main>
        </div>
      )
}
