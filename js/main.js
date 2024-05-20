const navigation = document.querySelector("nav ul")
const menuOpen = document.querySelector(".menu-open")
const menuClose = document.querySelector(".menu-close")

menuOpen.addEventListener("click", () => {
  navigation.classList.add("open")
})

menuClose.addEventListener("click", () => {
  navigation.classList.remove("open")
})
