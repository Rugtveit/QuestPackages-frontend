import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Component, ReactPropTypes } from 'react'
import styles from '../styles/DetailsCard.module.css'
import {useState} from 'react' 



const DetailsCard = (props) => {
    

    return (
        <div className={styles.card}>
            <h1 className={styles.cardName}>{props.name}</h1>
            <h2 className={styles.cardId}>{props.id}</h2>
            <p className={styles.description}>
            Spice up your Beat Saber HUD with a variety of configurable Qounters, which can display a wide variety of stats in an even wider variety of ways. This mod is an Oculus Quest port of Caeden117's Counters+ for PC. 
            </p>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <h1 className={styles.statName}>Author</h1>
                    <h2 className={styles.statValue}>danrouse</h2>
                </div>
                <div className={styles.stat}>
                    <h1 className={styles.statName}>Downloads</h1>
                    <h2 className={styles.statValue}>714</h2>
                </div>
                <div className={styles.stat}>
                    <h1 className={styles.statName}>Published</h1>
                    <h2 className={styles.statValue}>26st jan 2021</h2>
                </div>
            </div>
            <div className={styles.buttons}>
                <a className={styles.button}>
                    GitHub
                </a>
                <a className={styles.button}>
                    Download
                </a>
            </div>
            <div className={styles.packageVersion}>
                v0.1.0
            </div>
        </div>
    )
  }

  export default DetailsCard; 