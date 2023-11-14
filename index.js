const dataClick = (event) => {
  localStorage.clear();
  let itemId = event.target.id;
  let itemText = event.target.innerHTML;

  console.log(itemId, itemText);

  i = 1;
  while (i <= 5) {
    document.getElementById(`item${i}`).classList.remove("rating-item-clicked");
    i++;
  }

  document.getElementById(itemId).classList.add("rating-item-clicked");

  localStorage.setItem("itemText", itemText);
  console.log(document.getElementById("rated-count"));
};

const buttonClick = () => {
  window.location = "./thankPage.html";
};

if (localStorage.getItem("itemText") == null) {
  document.getElementById("rated-count").innerHTML = "0";
} else {
  document.getElementById("rated-count").innerHTML =
    localStorage.getItem("itemText");
}
