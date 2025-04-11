window.onload = function () {
    const gameCards = document.querySelectorAll(".game-card");
    gameCards.forEach((card) => {
      const sport = card.getAttribute("data-sport");
      const matchup = card.getAttribute("data-matchup");
      const date = card.getAttribute("data-date");
      const stream = card.getAttribute("data-stream");
  
      card.classList.add("card");
      card.innerHTML = `
          <div class="card-header">🏟️ ${sport}</div>
          <div class="card-body">
            <p><strong>Matchup:</strong> ${matchup}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Streaming:</strong> ${stream}</p>
          </div>
        `;
    });
  
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    }
    document.getElementById("college-sports")?.addEventListener("click", () => {
      scrollToSection("college-sports");
    });
  
    document
      .getElementById("professional-sports")
      ?.addEventListener("click", () => {
        scrollToSection("professional-sports");
      });
  };
  