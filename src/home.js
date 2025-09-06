const loadHome = function () {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";

  const h1 = document.createElement("h1");
  const h1Content = document.createTextNode("Welcome to Lucali");
  h1.append(h1Content);

  const p1 = document.createElement("p");
  const p1Content = document.createTextNode(
    "Accidental Pizzaiolo Mark Iacono opened Lucali as a labor of love, to save the local candy store of his Carroll Gardens youth from an uncertain fate."
  );
  p1.append(p1Content);

  const h2 = document.createElement("h2");
  const h2Content = document.createTextNode("ORDER YOUR PIE NOW");
  h2.append(h2Content);

  const p2 = document.createElement("p");
  const p2Content = document.createTextNode(
    "Once your order is placed to a selected location it CANNOT BE REFUNDED. Please make sure to double-check your location before you place your order."
  );
  p2.append(p2Content);

  contentDiv.append(h1);
  contentDiv.append(p1);
  contentDiv.append(h2);
  contentDiv.append(p2);
};

export default loadHome;
