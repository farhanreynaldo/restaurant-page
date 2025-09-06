const loadAbout = function () {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";

  const h1 = document.createElement("h1");
  const h1Content = document.createTextNode("About");
  h1.append(h1Content);
  contentDiv.append(h1);
};
export default loadAbout;
