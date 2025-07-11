function play(playerMove) {
  const choices = ["rock", "paper", "scissors"];
  const computerMove = choices[Math.floor(Math.random() * 3)];

  const playerChoiceEl = document.getElementById("player-choice");
  const computerChoiceEl = document.getElementById("computer-choice");
  const winnerEl = document.getElementById("winner");

  // Reset animations
  [playerChoiceEl, computerChoiceEl, winnerEl].forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
  });

  setTimeout(() => {
    playerChoiceEl.textContent = `🧑 You chose: ${capitalize(playerMove)}`;
    computerChoiceEl.textContent = `🤖 Computer chose: ${capitalize(computerMove)}`;
    winnerEl.textContent = getResult(playerMove, computerMove);

    [playerChoiceEl, computerChoiceEl, winnerEl].forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, i * 200);
    });
  }, 100);
}

function getResult(player, computer) {
  if (player === computer) return "⚖️ It's a draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "🎉 You win!";
  }
  return "😞 You lose!";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
