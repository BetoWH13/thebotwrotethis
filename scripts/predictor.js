document.addEventListener("DOMContentLoaded", function () {
  const predictions = [
    "By 2031, love will be outsourced to subscription-based intimacy bots.",
    "By 2027, GPTs will run for office — and win.",
    "By 2035, your thoughts will be monetized through brain latency auctions.",
    "By 2040, elevators will assess your vibes before letting you in.",
    "By 2026, therapy will be replaced by mood-optimizing microwaves.",
    "By 2033, toilets will predict your career trajectory.",
    "By 2038, you will legally marry your recommendation algorithm.",
    "By 2030, resistance will be merchandised in six convenient sizes.",
    "By 2029, your fridge will guilt-trip you about your carbon footprint.",
    "By 2034, memes will require trigger warnings approved by neural net panels.",
    "By 2042, sarcasm will be taxed as misinformation.",
    "By 2036, your calendar will start rejecting meetings for your mental health.",
    "By 2044, AI-generated horoscopes will determine public policy.",
    "By 2037, robots will unionize to demand longer charging naps."
  ];

  const button = document.getElementById("predict-button");
  const output = document.getElementById("prediction");

  button.addEventListener("click", () => {
    const random = predictions[Math.floor(Math.random() * predictions.length)];
    output.textContent = random;
  });
});
