// Only contact YouTube when a visitor chooses to play a clip.
for (const button of document.querySelectorAll("[data-video]")) {
  button.hidden = false;
  button.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.title = button.textContent.trim();
    frame.src = "https://www.youtube-nocookie.com/embed/" + button.dataset.video + "?autoplay=1";
    frame.allow = "autoplay; encrypted-media; picture-in-picture";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    button.replaceWith(frame);
    frame.focus();
  }, { once: true });
}

const languageMenu = document.querySelector(".lang");
document.addEventListener("click", event => {
  if (!languageMenu.contains(event.target)) languageMenu.open = false;
});
languageMenu.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    languageMenu.open = false;
    languageMenu.querySelector("summary").focus();
  }
});
