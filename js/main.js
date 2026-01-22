const form = document.getElementById("feedbackForm");
const navlinks = document.querySelectorAll('nav ul li a');
const currentpath= window.location.pathname.split("/").pop();
navlinks.forEach(link =>{
    if(link.getAttribute('href') === currentpath){
        link.classList.add('nav-active');
    }
})
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    let valid = true;

    if(name.value.trim() === ""){
      document.getElementById("error-message1").textContent = "Name is required";
      valid = false;
    }

    if(!email.value.includes("@")){
      document.getElementById("error-message2").textContent = "Please enter a valid email address";
      valid = false;
    }

    if(message.value.length < 10){
      document.getElementById("error-message3").textContent = "message must be atleast 10 characters long";
      valid = false;
    }

    if (valid) {
        const feedbackdata= {
            username: name.value,
            userEmail: email.value,
            userMessage: message.value,
            date: new
            Date().toLocaleString()
        };
        localStorage.setItem("monumentFeedback", JSON.stringify(feedbackdata));

      alert("Feedback saved successfully!");
      const form = document.getElementById("feedbackform");
      form.reset();
      document.getElementById("error-message1").textContent = "";
      document.getElementById("error-message2").textContent = "";
      document.getElementById("error-message3").textContent = "";
    }
  });
}