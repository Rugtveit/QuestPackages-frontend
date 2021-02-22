const queryResponseToDetails = (queryResponse, author) => {
  let releaseDownloads = queryResponse.data.repository.release.releaseAssets.nodes;
  let downloadCount =
    releaseDownloads[0].downloadCount + releaseDownloads[1].downloadCount;
  let obj = {
    author: `${author}`,
    downloads: `${downloadCount}`,
    published: `${queryResponse.data.repository.release.createdAt}`,
    description: `${queryResponse.data.repository.description}`,
  };
  return obj;
};

export default queryResponseToDetails;
