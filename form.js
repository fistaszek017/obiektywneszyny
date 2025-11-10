const form = document.getElementById("contactForm");
const message_good = document.getElementById("komunikat-poz");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // blokuje przeładowanie strony

  const formData = new FormData(form); // pobiera dane z formularza
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const topic = formData.get("topic");
  console.log(name, email, message, topic);


  message_good.style.display = "block";
  form.reset();
});