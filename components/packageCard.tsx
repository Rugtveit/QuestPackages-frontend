import Styles from "styles/PackageCard.module.css";

import Button from "./button";

class packageCardProp {
  packageName: string;
  packageVersion: string;
  packageUrl: string;
  packageDownload: string;
  packageId: string;
  urlButtonName: string;
}

const PackageCard = (cardProp: packageCardProp) => {
  return (
    <div className={Styles.card}>
      <h1 className={Styles.packageName}>{cardProp.packageName}</h1>
      <div className={Styles.buttons}>
        <Button
          link={`http://localhost:3000/details/${cardProp.packageId}`}
          name="Details"
        />
        <Button
          style={{ display: cardProp.packageUrl ? "block" : "none" }}
          link={cardProp.packageUrl}
          name={cardProp.urlButtonName}
        />
        <Button
          style={{ display: cardProp.packageDownload ? "block" : "none" }}
          link={cardProp.packageDownload}
          name="Download"
        />
      </div>
      <div className={Styles.packageVersion}>v{cardProp.packageVersion}</div>
    </div>
  );
};

export default PackageCard;
