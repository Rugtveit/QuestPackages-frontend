const getButtonName = (url) => {
  let domain = new URL(url);
  switch (domain.host) {
    case "drive.google.com":
      return "Download";
    case "github.com":
      return "GitHub";
    default:
      return "Webpage";
  }
};

export default getButtonName;
