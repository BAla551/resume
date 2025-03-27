// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleBtn.innerText = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});
