
    // Store the report body and metadata
    const reportLink = `mailto:?cc=support@instagram.com, cyberdost@mha.gov.in , connect@mygov.nic.in&bcc=Sanataniy2@gmail.com ,  sanataniking280@gmail.com&subject=Morphed%20Pornographic%20Content%20Hurting%20Religious%20Sentiments%20on%20Instagram.%20&body=The%20content%20being%20reported%20is%20extremely%20offensive%20and%20hurtful%20to%20religious%20sentiments.%20It%20includes%20pornographic%20and%20morphed%20imagery%20of%20a%20Hindu%20goddess... (truncated for brevity)`;

    // Set href dynamically
    document.getElementById("sendMailLink").href = reportLink;

    // Save history to localStorage
    function storeReport() {
      let history = JSON.parse(localStorage.getItem('reportHistory')) || [];
      history.push({
        date: new Date().toLocaleString(),
        content: reportLink
      });
      localStorage.setItem('reportHistory', JSON.stringify(history));
    }

    // Toggle Sidebar
    function toggleSidebar() {
      const sidebar = document.getElementById("historySidebar");
      const content = document.getElementById("historyContent");
      if (sidebar.style.width === "300px") {
        sidebar.style.width = "0";
      } else {
        sidebar.style.width = "300px";
        loadHistory();
      }
    }

    // Load history into sidebar
    function loadHistory() {
      let history = JSON.parse(localStorage.getItem('reportHistory')) || [];
      const container = document.getElementById("historyContent");
      if (history.length === 0) {
        container.innerHTML = "<p>No previous reports.</p>";
      } else {
        container.innerHTML = "";
        history.reverse().forEach(item => {
          const entry = document.createElement("div");
          entry.innerHTML = `<strong>${item.date}</strong><br><textarea readonly style="width:100%; height:100px;">${decodeURIComponent(item.content)}</textarea><hr>`;
          container.appendChild(entry);
        });
      }
    }
  