const loadAbout = function () {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";

  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.textContent = "Superior service, personalized attention";
  p.textContent =
    "From the City of Pistoia and the streets of NYC. We've come together to bring you L'industrie Pizzeria. With the artful techniques and passions of Italy blended with the flavors and characteristics of a classic New York slice. We work daily to bridge the gap between these worlds, while putting quality and passion above all.";

  const h2 = document.createElement("h2");
  h2.textContent =
    "Contact us Send us a message and we'll get back to you as soon as possible. For our catering orders please click here!";
  contentDiv.append(h1);
  contentDiv.append(p);
  contentDiv.append(h2);
};
export default loadAbout;
