  // Optional: Dynamically update text content
    const greetings = [
      "Welcome to My Website",
      "Feel Free to Explore!",
      "Report Offending Content Easily",
      "Built with HTML, CSS, and JS"
    ];

     let index = 0;
     setInterval(() => {
      document.getElementById("greeting").textContent = greetings[index];
      index = (index + 1) % greetings.length;
    }, 3000); // Change every 3 seconds

 
 //  contact form
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // 👉 Log the data (you can send this to server later)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for your message! We’ll get back to you soon.");
    this.reset(); // clear the form
  })
