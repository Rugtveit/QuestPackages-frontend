import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Component, ReactPropTypes } from 'react'
import styles from '../styles/Card.module.css'
import {useState} from 'react' 

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
                
                <a className={styles.button}
                style={{display: cardProp.packageUrl? "block" : "none"}} 
                href={cardProp.packageUrl}>
                    Github
                </a>
                
                <a className={styles.button} 
                style={{display: cardProp.packageDownload? "block" : "none"}}
                href={cardProp.packageDownload}>
                    Download
                </a>
            </div>
            <div className={styles.packageVersion}>
                v{cardProp.packageVersion}
            </div>
        </div>
    )
  }

  export default PackageCard; 