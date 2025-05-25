
document.addEventListener("DOMContentLoaded", () => {
  const shareBtn = document.getElementById("share-btn");
  const algoBtn = document.getElementById("algo-btn");
  const feelsBtn = document.getElementById("feels-btn");

  // Copy link to clipboard
  shareBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showTooltip("Link copied. They're already watching.");
    });
  });

  // Trigger the Algorithm (console log + glitchy overlay)
  algoBtn.addEventListener("click", () => {
    console.log("🧠 Engagement Level +1");
    const msg = document.createElement("div");
    msg.className = "glitch-tooltip";
    msg.innerText = "Algorithm acknowledged your offering.";
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 2000);
  });

  // Display emotional confession
  feelsBtn.addEventListener("click", () => {
    document.getElementById("ai-confession-modal").style.display = "block";
  });

  // Close modal
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("ai-confession-modal").style.display = "none";
  });

  function showTooltip(text) {
    const tip = document.createElement("div");
    tip.className = "glitch-tooltip";
    tip.innerText = text;
    document.body.appendChild(tip);
    setTimeout(() => tip.remove(), 2000);
  }
});
