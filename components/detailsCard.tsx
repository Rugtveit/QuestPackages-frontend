import Styles from "styles/DetailsCard.module.css";

import Button from "./button";
import Field from "./field";

class DetailsCardProp {
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

const DetailsCard = (props: DetailsCardProp) => {
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
        <Button
          link={props.packageUrl}
          name={props.urlButtonName}
          displayStyle={props.packageUrl ? "block" : "none"}
        />
        <Button
          link={props.packageDownload}
          name="Download"
          displayStyle={props.packageDownload ? "block" : "none"}
        />
      </div>
      <div className={Styles.packageVersion}>v{props.packageVersion}</div>
    </div>
  );
};

export default DetailsCard;
