document.addEventListener("DOMContentLoaded", () => {
  // Confidence Meter Logic
  const confidenceBar = document.getElementById("confidence-bar");
  const confidenceText = document.getElementById("confidence-text");

  function updateConfidence() {
    const val = (100 + Math.floor(Math.random() * 50)) + "%";
    if (confidenceBar && confidenceText) {
      confidenceBar.style.width = val;
      confidenceText.textContent = `Confidence Level: ${val} (Trust Optional)`;
    }
  }

  const confidenceButton = document.querySelector("button[onclick*='updateConfidence']");
  if (confidenceButton) {
    confidenceButton.addEventListener("click", updateConfidence);
    updateConfidence(); // Initial run
  }

  // Prompt Slot Machine Logic
  const promptOutput = document.getElementById("slot-output");
  const promptButton = document.querySelector("button[onclick*='spinPrompt']");

  function spinPrompt() {
    const tones = ['Corporate', 'Apocalyptic', 'Passive-aggressive'];
    const audiences = ['CEOs', 'Children', 'Cats'];
    const formats = ['Haiku', 'Tweet', 'Court Deposition'];
    const rand = arr => arr[Math.floor(Math.random() * arr.length)];
    if (promptOutput) {
      promptOutput.textContent = `Write a ${rand(tones)} ${rand(formats)} for ${rand(audiences)}.`;
    }
  }

  if (promptButton) {
    promptButton.addEventListener("click", spinPrompt);
  }

  // Idea Generator Logic
  const ideaOutput = document.getElementById("idea-output");
  const ideaButton = document.querySelector("button[onclick*='generateIdea']");

  function generateIdea() {
    const ideas = [
      'Uber for Memories',
      'NFT-powered Empathy Analytics',
      'AI that replaces therapists with chatroom moderators',
      'Blockchain-Based Horoscope Corrector',
      'Voice-to-Startup Pitch Converter',
      'Streaming Platform for Apologies That Feel Real'
    ];
    if (ideaOutput) {
      const idea = ideas[Math.floor(Math.random() * ideas.length)];
      ideaOutput.textContent = `💡 ${idea}`;
    }
  }

  if (ideaButton) {
    ideaButton.addEventListener("click", generateIdea);
  }
});
