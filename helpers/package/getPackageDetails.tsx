import queryResponseToDetails from "helpers/query/queryResponseToDetails"
import getQuery from "../query/getQuery"

const getPackageDetails = async (url) => {
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

  let queryData = await getQuery(urlPaths[1], urlPaths[2], urlPaths[5]);
  return queryResponseToDetails(queryData, urlPaths[1]);
};

export default getPackageDetails;