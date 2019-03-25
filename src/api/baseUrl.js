export default function getBaseUrl() {
  //TODO: Implement later
  return process.env.NODE_ENV === "production"
    ? "https://goals-api.server.samuelotterman.com/api/"
    : "http://localhost:3001/";
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
