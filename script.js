const burgarEL = document.querySelector(".burger")
const navLINK = document.querySelector(".nav-link")

burgarEL.addEventListener("click",() => {
    navLINK.classList.toggle("active")
})