import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Component, ReactPropTypes } from 'react'
import styles from '../styles/Card.module.css'

class cardProp 
{
    packageName: string;
    packageVersion: string;
    packageUrl: string;
    packageDownload: string;
    packageId: string;
}

const PackageCard = (cardProp: cardProp) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.packageName}>{cardProp.packageName}</h1>
            <div className={styles.buttons}>
                <a className={styles.button}>Details</a>
                <a className={styles.button}>Github</a>
                <a className={styles.button}>Download</a>
            </div>
            <div className={styles.packageVersion}>v{cardProp.packageVersion}</div>
        </div>
    )
  }

  export default PackageCard; 