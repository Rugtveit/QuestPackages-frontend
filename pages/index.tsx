import Axios, { AxiosResponse } from "axios";
import { GetStaticProps } from "next";
import React from "react";

import Styles from "styles/Home.module.css";

import Header from "components/header";
import PackageCard from "components/packageCard";

import getButtonName from "helpers/button/getButtonName";

class PackageData {
  id: string;
  name: string;
  version: string;
  dependency: object[];
  url: string;
  downloadUrl: string;
  versions: string[];
}

export default function Home({ packageData }: { packageData: PackageData[] }) {
  //console.log(packageData);
  return (
    <div className={Styles.container}>
      <Header />
      <div className={Styles.packageCards}>
        {packageData.map(
          ({ name, version, dependency, url, downloadUrl, versions, id }) => {
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
  if (process.env.NODE_ENV == "development")
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  let apiResponse: AxiosResponse = await Axios.get(
    `${process.env.BACKEND_URL}/api/package`
  );
  let packageData: PackageData[] = apiResponse.data;

  return {
    props: {
      packageData,
    },
  };
};
