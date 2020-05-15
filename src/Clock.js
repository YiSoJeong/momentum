const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours}:${minutes}`;
};

const init = () => {
  getTime();
};

init();
