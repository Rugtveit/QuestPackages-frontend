import styles from "../styles/DetailsCard.module.css";
import Button from "./button";
import Field from "./field";

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
  console.log(props.packageDownloads);
  return (
    <div className={styles.card}>
      <h1 className={styles.cardName}>{props.packageName}</h1>
      <h2 className={styles.cardId}>{props.packageId}</h2>
      <p className={styles.description}>{props.packageDescription}</p>
      <div className={styles.fields}>
        <Field name="Author" value={props.packageAuthor} />
        <Field name="Downloads" value={props.packageDownloads} />
        <Field name="Date" value={props.packagePublished} />
      </div>
      <div className={styles.buttons}>
        <Button link={props.packageUrl} name="GitHub" />
        <Button link={props.packageDownload} name="Download" />
      </div>
      <div className={styles.packageVersion}>v{props.packageVersion}</div>
    </div>
  );
};

export default DetailsCard;
