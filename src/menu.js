const loadMenu = function () {
  const contentDiv = document.querySelector("#content");

  const h1 = document.createElement("h1");
  const h1Content = document.createTextNode("Menu");
  h1.append(h1Content);
  contentDiv.append(h1);
};

export default loadMenu;
