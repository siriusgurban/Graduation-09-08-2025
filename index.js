function startCountdown(targetDate) {
  const countdownElement = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownElement.textContent = "Let's Party Start! 🎉";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown(); // run once immediately
  const interval = setInterval(updateCountdown, 1000); // update every second
}

const targetDate = new Date("August 09, 2025 17:00:00").getTime();
startCountdown(targetDate);
