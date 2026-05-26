const previewButtons = document.querySelectorAll("[data-preview]");
const visualStage = document.querySelector(".visual-stage");

previewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previewButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    visualStage.dataset.stage = button.dataset.preview;
  });
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

document.querySelectorAll("[data-play-card]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.remove("is-playing");
    window.requestAnimationFrame(() => {
      card.classList.add("is-playing");
    });

    window.setTimeout(() => {
      card.classList.remove("is-playing");
    }, 1500);
  });
});

const demoRange = document.querySelector("#demo-range");
const journeyCards = document.querySelectorAll(".journey-card");
const resetDemo = document.querySelector("#reset-demo");

function setDemoStep(step) {
  journeyCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.step === String(step));
  });
}

demoRange.addEventListener("input", (event) => {
  setDemoStep(event.target.value);
});

resetDemo.addEventListener("click", () => {
  demoRange.value = 1;
  setDemoStep(1);
});

const tableauContainer = document.querySelector("#ticketTableauViz");

if (tableauContainer) {
  const tableauFrame = document.querySelector("#ticketTableauFrame");
  const vizElement = tableauContainer.getElementsByTagName("object")[0];
  const dashboardWidth = 1800;
  const dashboardHeight = 927;

  function resizeTableauViz() {
    const frameWidth = tableauFrame.offsetWidth;
    const scale = Math.min(1, frameWidth / dashboardWidth);
    const scaledHeight = Math.ceil(dashboardHeight * scale);

    tableauFrame.style.height = `${scaledHeight}px`;
    tableauContainer.style.width = `${dashboardWidth}px`;
    tableauContainer.style.height = `${dashboardHeight}px`;
    tableauContainer.style.transform = `scale(${scale})`;
    vizElement.style.width = `${dashboardWidth}px`;
    vizElement.style.height = `${dashboardHeight}px`;
  }

  resizeTableauViz();
  window.addEventListener("resize", resizeTableauViz);

  const tableauScript = document.createElement("script");
  tableauScript.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
  vizElement.parentNode.insertBefore(tableauScript, vizElement);
}
