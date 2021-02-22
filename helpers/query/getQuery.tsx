import Axios from "axios";

const getQuery = async (author, repo, tagName) => {
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

export default getQuery;
