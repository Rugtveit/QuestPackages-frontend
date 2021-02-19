import { AppProps } from "next/dist/next-server/lib/router/router";
import { Component, ReactPropTypes } from "react";
import styles from "../styles/DetailsCard.module.css";
import { useState } from "react";

class detailsCardProp {
  packageName: string;
  packageVersion: string;
  packageUrl: string;
  packageDownload: string;
  packageId: string;
  urlButtonName: string;
  packageDescription: string;
  packageAuthor: string;
  packageDownloads: string;
  packagePublished: string;
}

const DetailsCard = (props: detailsCardProp) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.cardName}>{props.packageName}</h1>
      <h2 className={styles.cardId}>{props.packageId}</h2>
      <p className={styles.description}>{props.packageDescription}</p>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <h1 className={styles.statName}>Author</h1>
          <h2 className={styles.statValue}>{props.packageAuthor}</h2>
        </div>
        <div className={styles.stat}>
          <h1 className={styles.statName}>Downloads</h1>
          <h2 className={styles.statValue}>{props.packageDownloads}</h2>
        </div>
        <div className={styles.stat}>
          <h1 className={styles.statName}>Published</h1>
          <h2 className={styles.statValue}>{props.packagePublished}</h2>
        </div>
      </div>
      <div className={styles.buttons}>
        <a href={props.packageUrl} className={styles.button}>
          GitHub
        </a>
        <a href={props.packageDownload} className={styles.button}>
          Download
        </a>
      </div>
      <div className={styles.packageVersion}>v{props.packageVersion}</div>
    </div>
  );
};

export default DetailsCard;
