document.addEventListener("DOMContentLoaded", () => {

 
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour < 12) {
    greetingEl.textContent = "Good Morning, Welcome!";
  } else if (hour < 18) {
    greetingEl.textContent = "Good Afternoon, Welcome!";
  } else {
    greetingEl.textContent = "Good Evening, Welcome!";
  }


  
  const themeToggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });



  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  const emailInput = document.getElementById("email");

// Custom email validation message
emailInput.addEventListener("invalid", () => {
  emailInput.setCustomValidity(
    "Please enter a valid email, for example: name@example.com"
  );
});

emailInput.addEventListener("input", () => {
  emailInput.setCustomValidity("");
});

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.style.color = "var(--accent)";
    formStatus.textContent =
      `Thank you, ${name}! Your message has been received.`;

    contactForm.reset();

    setTimeout(() => {
      formStatus.textContent = "";
    }, 4000);
  });



  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const emptyProjectsMessage =
    document.getElementById("empty-projects");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;
      let visibleProjects = 0;

    
      filterButtons.forEach((filterButton) => {
        filterButton.classList.remove("active");
      });

      
      button.classList.add("active");

    
      projectCards.forEach((card) => {
        const categories = card.dataset.category.split(" ");

        const shouldShow =
          selectedFilter === "all" ||
          categories.includes(selectedFilter);

        if (shouldShow) {
          card.style.display = "flex";
          card.classList.add("show-card");
          visibleProjects++;
        } else {
          card.style.display = "none";
          card.classList.remove("show-card");
        }
      });


      emptyProjectsMessage.hidden = visibleProjects !== 0;
    });
  });

});