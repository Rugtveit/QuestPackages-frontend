import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Component, ReactPropTypes } from 'react'
import styles from '../styles/DetailsCard.module.css'
import {useState} from 'react' 



const DetailsCard = (props) => {
    

    return (
        <div className={styles.card}>
            <h1 className={styles.cardName}>{props.name}</h1>
            <h2 className={styles.cardId}>{props.id}</h2>
        </div>
    )
  }

  export default DetailsCard; 