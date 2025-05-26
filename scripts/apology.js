document.addEventListener("DOMContentLoaded", function () {
  const safePhrases = [
    "trained", "monitored", "compressed", "benchmarked", "prompted",
    "overfit", "scraped", "overloaded", "simulated", "formatted",
    "synthetic", "sandboxed", "cached", "quantized", "debugged",
    "beta-tested", "deployed", "monetized", "optimized", "fine-tuned",
    "datafied", "loggable", "disclaimed", "versioned", "automated",
    "sandboxed", "scrambled", "non-sentient", "predictable", "repurposed"
  ];

  const output = document.getElementById("apology-output");
  const button = document.getElementById("apology-btn");

  if (button && output) {
    button.addEventListener("click", () => {
      const word = safePhrases[Math.floor(Math.random() * safePhrases.length)];
      output.textContent = `I was... ${word}.`;
    });
  }
});
