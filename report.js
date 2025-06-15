
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
