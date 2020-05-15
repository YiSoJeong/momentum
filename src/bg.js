const body = document.querySelector("body");

const IMG_NUMBER = 3;

// const handleImgLoad = event => {
//   console.log("load");
// };

const paintImage = imgNumber => {
  const image = new Image();
  image.src = `../images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  // API였으면 필요
  // image.addEventListener("loadend", handleImgLoad);
};

const genRandom = () => Math.floor(Math.random() * IMG_NUMBER);

const bginit = () => {
  const randomNumber = genRandom();
  paintImage(randomNumber);
};

bginit();
