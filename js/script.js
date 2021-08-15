const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const input = document.querySelectorAll(".input");

  for (let i = 0; i < input.length; i++) {
    if (input[i].value == "") {
      input[i].nextElementSibling.classList.remove("hidden");
      input[i].parentElement.nextElementSibling.classList.remove("hidden");
      input[i].parentElement.classList.add("ring-2", "ring-pink-glamour");
    } else {
      input[i].nextElementSibling.classList.add("hidden");
      input[i].parentElement.nextElementSibling.classList.add("hidden");
      input[i].parentElement.classList.remove("ring-2", "ring-pink-glamour");
    }
  }

  const email = input[2].value;
  const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  const msg = input[2].parentElement.nextElementSibling.nextElementSibling;

  if (!email.match(regx)) {
    input[2].nextElementSibling.classList.remove("hidden");
    input[2].parentElement.classList.add("ring-2", "ring-pink-glamour");
    msg.classList.remove("hidden");
  } else {
    input[2].nextElementSibling.classList.add("hidden");
    input[2].parentElement.classList.remove("ring-2", "ring-pink-glamour");
    msg.classList.add("hidden");
  }
});
