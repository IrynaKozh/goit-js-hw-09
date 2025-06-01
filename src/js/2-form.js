let formData = {
    email: "",
    message: "",
  };
  
  const form = document.querySelector(".feedback-form");
  const input = form.querySelector(".input");
  const textarea = form.querySelector(".textarea");
  const storageKey = "feedback-form-state";
  
  populateForm();
  
  form.addEventListener("input", handleInput);
  form.addEventListener("submit", handleSubmit);
  
  function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value;
    localStorage.setItem(storageKey, JSON.stringify(formData));
  }
  
  function populateForm() {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) {
      formData = JSON.parse(savedData);
      input.value = formData.email || "";
      textarea.value = formData.message || "";
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email.trim() || !formData.message.trim()) {
      alert("Fill please all fields");
      return;
    }
    console.log("Form submitted:", formData);
    form.reset();
    localStorage.removeItem(storageKey);
    formData = {
      email: "",
      message: "",
    };
  }
  