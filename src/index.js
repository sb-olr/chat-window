const inputBox = document.querySelector("input");
const messages = document.querySelector(".messages");

const chatForm = document.querySelector("form");

function addMessage(message, me = true) {
  const template = `<div class="message">
    <div class="${
      me ? "myMessage" : "fromThem"
    }" data-date="${new Date().toLocaleTimeString()}">
      <p>${message}</p>
      <date> ${new Date().toLocaleTimeString()} </date>
    </div>
  </div>`;

  document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
  document.querySelector(".typing").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".typing").classList.toggle("active");
  }, 1000);
}

// typing();
addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");
// inputBox.focus();

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */

// Code here
chatForm.addEventListener("submit", (e) => {
  addMessage(inputBox.value);
  inputBox.value = "";
  inputBox.focus();
  e.preventDefault();
});

/**
 * Listen to the click on each message and create an alert
 * with the date from 'data-date'
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// Code here
messages.addEventListener("click", (e) => {
  const date = e.target.closest("div").dataset.date;
  date && alert(date);
});
/**
 * Listen to every Keydown (from the keyboard) in the input and call
 * the function typing()
 */

// Code here
inputBox.addEventListener("keydown", () => {
  typing();
});
