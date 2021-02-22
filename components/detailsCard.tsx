import Styles from "styles/DetailsCard.module.css";

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
  return (
    <div className={Styles.card}>
      <h1 className={Styles.cardName}>{props.packageName}</h1>
      <h2 className={Styles.cardId}>{props.packageId}</h2>
      <p className={Styles.description}>{props.packageDescription}</p>
      <div className={Styles.fields}>
        <Field name="Author" value={props.packageAuthor} />
        <Field name="Downloads" value={props.packageDownloads} />
        <Field name="Date" value={props.packagePublished} />
      </div>
      <div className={Styles.buttons}>
        <Button link={props.packageUrl} name={props.urlButtonName} />
        <Button link={props.packageDownload} name="Download" />
      </div>
      <div className={Styles.packageVersion}>v{props.packageVersion}</div>
    </div>
  );
};

export default DetailsCard;
