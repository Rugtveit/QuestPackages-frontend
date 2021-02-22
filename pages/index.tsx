import Axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";

import Styles from "../styles/Home.module.css";

import Header from "../components/header";
import PackageCard from "../components/packageCard";


export default function Home({
  packageData,
}: {
  packageData: {
    id: string;
    name: string;
    version: string;
    dependency: object;
    url: string;
    downloadUrl: string;
    versions: string[];
  }[];
}) {
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.packageCards}>
        {packageData.map(
          ({ name, downloadUrl, url, version, dependency, versions, id }) => {
            const buttonName = getButtonName(url);
            return (
              <div>
                <PackageCard
                  urlButtonName={buttonName}
                  packageName={name}
                  packageVersion={version}
                  packageId={id}
                  packageUrl={url}
                  packageDownload={downloadUrl}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  let apiResponse: AxiosResponse = await Axios.get(
    "http://localhost:5000/api/package"
  );
  let packageData = apiResponse.data;

  return {
    props: {
      packageData,
    },
  };
};

let getButtonName = (url) => {
  let domain = new URL(url);
  switch (domain.host) {
    case "drive.google.com":
      return "Download";
    case "github.com":
      return "GitHub";
    default:
      return "URL";
  }
};
