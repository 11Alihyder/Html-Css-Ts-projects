let panels = document.querySelectorAll<HTMLDivElement>(".panel");

if (panels.length > 0) {
  panels.forEach((panel: HTMLDivElement) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });
}

function removeActiveClasses() {
  panels.forEach((panel: HTMLDivElement) => {
    panel.classList.remove("active");
  });
}
