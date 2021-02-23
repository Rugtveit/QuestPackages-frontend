const queryResponseToDetails = (queryResponse, author) => {
  let releaseDownloads =
    queryResponse.data.repository.release.releaseAssets.nodes;
  let downloadCount = 0;
  for (let i = 0; i < releaseDownloads.length; i++) {
    downloadCount += releaseDownloads[i].downloadCount;
  }
  let obj = {
    author: `${author}`,
    downloads: `${downloadCount}`,
    published: `${queryResponse.data.repository.release.createdAt}`,
    description: `${queryResponse.data.repository.description}`,
  };
  return obj;
};

export default queryResponseToDetails;
