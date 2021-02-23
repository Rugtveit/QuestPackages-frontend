import Axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

import Styles from "styles/Details.module.css";

import Arrow from "components/arrow";
import DetailsCard from "components/detailsCard";
import Header from "components/header";

import getButtonName from "helpers/button/getButtonName";

import getPackageDetails from "helpers/package/getPackageDetails";

export default function Package({ packageData, packageDetails }) {
  const router = useRouter();
  const [isShown, setIsShown] = useState(false);

  if (packageDetails.description == "null") {
    packageDetails.description = "No description found";
  }

  let buttonName = getButtonName(packageData.url);
  return (
    <div className={Styles.container}>
      <Header />

      <a
        href="http://localhost:3000"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={Styles.backButton}
      >
        <Arrow
          className={Styles.arrow}
          color={isShown ? "#8281D8" : "#6F6F6F"}
        />
        <h3 className={Styles.backText}>Back to packages</h3>
      </a>

      <DetailsCard
        packageName={packageData.name}
        packageId={packageData.id}
        packageUrl={packageData.url}
        packageDownload={packageData.downloadUrl}
        packageVersion={packageData.version}
        packageDescription={packageDetails.description}
        packageAuthor={packageDetails.author}
        packageDownloads={packageDetails.downloads}
        packagePublished={packageDetails.published}
        urlButtonName={buttonName}
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  if(process.env.NODE_ENV == 'development') process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const req = await Axios.get(`http://localhost:5000/api/package/${params.id}`);
  const data = req.data;
  let details = await getPackageDetails(data.downloadUrl);

  return {
    props: { packageData: data, packageDetails: details },
  };
}

export async function getStaticPaths() {
  if(process.env.NODE_ENV == 'development') process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const req = await Axios.get(`http://localhost:5000/api/package/ids`);
  const data = await req.data;

  const paths = data.map((packageData) => {
    return { params: { id: packageData } };
  });

  return {
    paths,
    fallback: false,
  };
}
