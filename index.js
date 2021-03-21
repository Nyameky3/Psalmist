let read = document.getElementById("read");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("hidden");

read.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);

function openModal() {
    overlay.classList.add("active");
    hidden.classList.add("active");
}

function closeModal() {
    overlay.classList.remove("active");
    hidden.classList.remove("active");
}