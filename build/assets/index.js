const styleSheet = document.getElementById("styleSheet");
const changeBG = document.getElementById("change-bg");
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

function changeStyleSheet() {
  if (changeBG.checked) {
    styleSheet.href = "./assets/black-theme.css";
    localStorage.theme = "dark";
  } else {
    styleSheet.href = "./assets/styles.css";
    localStorage.theme = "light";
  }
}

if (
  localStorage.theme === "dark" ||
  (!localStorage.theme && prefersDarkMode.matches)
) {
  styleSheet.href = "./assets/black-theme.css";
  localStorage.theme = "dark";
} else {
  styleSheet.href = "./assets/styles.css";
  localStorage.theme = "light";
}
