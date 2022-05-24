function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stops the function from running altogether if no audio file associated with pressed key's key code
    audio.currentTime = 0; // rewinds audio file to beginning to allow plays in quick succession
    audio.play();
    key.classList.add("playing");
};

function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip the transitionend event if it isn't a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", playSound);