import { useRouter } from "next/router";
import Header from "../../components/header";
import styles from "../../styles/Details.module.css";
import Arrow from "../../components/arrow";
import DetailsCard from "../../components/detailsCard";
import { useState } from "react";
import Axios from "axios";

export default function Package({ packageData, packageDetails }) {
  const router = useRouter();
  const { id } = router.query;
  const [isShown, setIsShown] = useState(false);
  const description =
    "This is a test description for now as I haven't gotten it yet!";
  console.log(packageDetails);
  if (packageDetails.description == "null") {
    packageDetails.description = "No description found";
  }
  return (
    <div className={styles.container}>
      <Header />

      <a
        href="http://localhost:3000"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={styles.backButton}
      >
        <Arrow
          className={styles.arrow}
          color={isShown ? "#8281D8" : "#6F6F6F"}
        />
        <h3 className={styles.backText}>Back to packages</h3>
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
      />
    </div>
  );
}

export async function getStaticProps({ params }) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
  const req = await Axios.get(`http://localhost:5000/api/package/${params.id}`);
  const data = req.data;
  let details = await getPackageDetails(data.downloadUrl);
  console.log(details);

  return {
    props: { packageData: data, packageDetails: details },
  };
}

export async function getStaticPaths() {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
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

let sendQuery = async (author, repo, tagName) => {
  let response = await Axios({
    url: "https://api.github.com/graphql",
    method: "post",
    headers: { Authorization: `bearer ${process.env.GITHUB_TOKEN}` },
    data: {
      query: `{
                repository(name: "${repo}", owner: "${author}") {
                  description
                  release(tagName: "${tagName}") {
                    createdAt
                    releaseAssets(first: 5) {
                      nodes {
                        downloadCount
                      }
                    }
                  }
                }
              }`,
    },
  });

  return response.data;
};

let getPackageDetails = async (url) => {
  var errorObj = {
    author: "Unknown",
    downloads: "0",
    published: "Unknown",
    description: `This package doesn't use Github, so at the moment it's not possible to get a description!`,
  };

  if (!url) return errorObj;

  let domain = new URL(url);
  if (domain.host != "github.com") {
    return errorObj;
  }

  var urlPaths = domain.pathname.split("/");
  console.log(urlPaths[1]);
  console.log(urlPaths[2]);
  console.log(urlPaths[5]);

  let queryData = await sendQuery(urlPaths[1], urlPaths[2], urlPaths[5]);
  return queryDataToObj(queryData, urlPaths[1]);
};

let queryDataToObj = (queryData, author) => {
  let releaseDownloads = queryData.data.repository.release.releaseAssets.nodes;
  let downloadCount =
    releaseDownloads[0].downloadCount + releaseDownloads[1].downloadCount;
  console.log(downloadCount);
  let obj = {
    author: `${author}`,
    downloads: `${downloadCount}`,
    published: `${queryData.data.repository.release.createdAt}`,
    description: `${queryData.data.repository.description}`,
  };

  return obj;
};
