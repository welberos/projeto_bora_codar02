function animation() {
  const images = document.querySelector("#image").children;
  const buttons = document.querySelector("#button").children;

  for (const item of images) {
    item.classList.toggle('hide-image');
  }
  for (const item of buttons) {
    item.classList.toggle('hide-button');
  }

}