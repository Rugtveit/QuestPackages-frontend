import Styles from "styles/PackageCard.module.css";

import Button from "./button";

class PackageCardProp {
  packageName: string;
  packageVersion: string;
  packageUrl: string;
  packageDownload: string;
  packageId: string;
  urlButtonName: string;
}

const PackageCard = (cardProp: PackageCardProp) => {
  return (
    <div className={Styles.card}>
      <h1 className={Styles.packageName}>{cardProp.packageName}</h1>
      <div className={Styles.buttons}>
        <Button
          link={`/details/${cardProp.packageId}`}
          name="Details"
        />
        <Button
          displayStyle={cardProp.packageUrl ? "block" : "none" }
          link={cardProp.packageUrl}
          name={cardProp.urlButtonName}
        />
        <Button
          displayStyle={cardProp.packageDownload ? "block" : "none" }
          link={cardProp.packageDownload}
          name="Download"
        />
      </div>
      <div className={Styles.packageVersion}>v{cardProp.packageVersion}</div>
    </div>
  );
};

export default PackageCard;
