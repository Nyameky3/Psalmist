let read = document.getElementById("read");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("hidden");
let contactBtn = document.getElementById("contact");
let contacts = document.getElementById("contacts");

read.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
contactBtn.addEventListener("click", indicate);

function openModal() {
    overlay.classList.add("active");
    hidden.classList.add("active");
}

function closeModal() {
    overlay.classList.remove("active");
    hidden.classList.remove("active");
}

function indicate() {
    contacts.classList.add("active");
    setTimeout(() => {
        contacts.classList.remove("active");
    }, 1000);
}