const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_ON = "showing";

const saveName = text => {
  localStorage.setItem(USER_LS, text);
};

const handleSubmit = event => {
  event.preventDefault(); // 기본동작 막기
  const currentValue = input.value;
  // console.log(currentValue);
  paintGreeting(currentValue);
  saveName(currentValue);
};

const askForName = () => {
  form.classList.add(SHOWING_ON);
  form.addEventListener("submit", handleSubmit);
};

const paintGreeting = text => {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello ${text}`;
};

const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
};

const initGreeting = () => {
  loadName();
};

initGreeting();
