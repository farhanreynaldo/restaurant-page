const loadHome = function () {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "WELCOME TO L'industrie Pizzeria";

  const p1 = document.createElement("p");
  p1.textContent =
    "Celebrated pizza shop serving classic old-world slices & pies, plus inventive flavor combinations.";

  const h2 = document.createElement("h2");
  h2.textContent = "ORDER YOUR PIE NOW";

  const p2 = document.createElement("p");
  p2.textContent =
    "Convenient locations in Brooklyn and Lower Manhattan. Once your order is placed to a selected location it CANNOT BE REFUNDED. Please make sure to double-check your location before you place your order";

  contentDiv.append(h1);
  contentDiv.append(p1);
  contentDiv.append(h2);
  contentDiv.append(p2);
};

export default loadHome;
