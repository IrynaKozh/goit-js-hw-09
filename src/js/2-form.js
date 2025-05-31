const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", handleInput);
function handleInput(event) {
    const message = event.target.value;
    localStorage.setItem(storageKey, message);
}
function populateTextArea() {
    const message = localStorage.getItem(storageKey);
    if(message) {
        textarea.value = message;
    }
}


form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
}