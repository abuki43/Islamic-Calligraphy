const hamburger = document.querySelector(".hamburger")
const sideBarClose = document.querySelector(".close")
const sideBar = document.querySelector(".sidebar")
const overlay = document.querySelector(".overlay")
const navLanguage = document.querySelector(".lan-btn")
const mobLangContainer = document.querySelector(".languages-mob")
const langContainer = document.querySelector(".languages")
const mobLangBtn = document.querySelector(".mobChangeLang")
const sidebarList = document.querySelector(".sidebar .list")

hamburger.addEventListener("click",()=>{
    sideBar.classList.add("showSideBar");
    overlay.classList.add("show")
})
sideBarClose.addEventListener("click",()=>{
    sideBar.classList.remove("showSideBar");
    overlay.classList.remove("show")
})

sidebarList.addEventListener("click",()=>{
    sideBar.classList.remove("showSideBar");
    overlay.classList.remove("show")
})


navLanguage.addEventListener("click",()=>{
    console.log(langContainer);
    langContainer.classList.toggle("show")
})


const main = document.querySelector("body")
main.addEventListener("click",(e)=>{
    if(!sideBar.contains(e.target) && !hamburger.contains(e.target)) {
        sideBar.classList.remove("showSideBar");
        overlay.classList.remove("show")
        console.log("hello");
    }
    if(!langContainer.contains(e.target) && (!navLanguage.contains(e.target))){
        langContainer.classList.remove("show")
    }
})

mobLangBtn.addEventListener("click",()=>{
    mobLangContainer.classList.toggle("show")
})