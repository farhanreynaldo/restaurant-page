const createItem = function (name, price) {
  const itemDiv = document.createElement("div");
  const pName = document.createElement("p");
  const pPrice = document.createElement("p");
  pName.textContent = name;
  pPrice.textContent = price;
  itemDiv.append(pName);
  itemDiv.append(pPrice);
  return itemDiv;
};

const items = [
  { name: "Parma Pie", price: 38 },
  { name: "Pepperoni Pie", price: 38 },
  { name: "New Yorker Pie", price: 38 },
  { name: "L'Industrie Pie", price: 38 },
  { name: "White Pie", price: 38 },
];

const loadMenu = function () {
  const contentDiv = document.querySelector("#content");
  contentDiv.textContent = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Menus";
  const p1 = document.createElement("p");
  p1.textContent =
    "You may place your take-out order, over the phone or in person, as early as 4 PM day-of. All items are made-to-order.";
  contentDiv.append(h1);
  contentDiv.append(p1);

  items.forEach((item) => {
    const itemDiv = createItem(item.name, item.price);
    contentDiv.append(itemDiv);
  });
};

export default loadMenu;
