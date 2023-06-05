const logo = document.querySelector(".ham-logo");
const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".close");
const mainLinks = document.querySelector(".links")

//Hamburger toggle
 logo.addEventListener("click", () => {
     setTimeout(() => {
        menu.classList.toggle("showmenu");
        mainLinks.classList.toggle("main-links-stop");
     }, 300)
 })

//Clipboard
const copyText = document.querySelector(".copy-text");
copyText.querySelector("button").addEventListener("click",function(){
    let input = copyText.querySelector("input.text");
    input.select(); //selects all texts
    document.execCommand("copy");
    copyText.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
      copyText.classList.remove("active");
    },2500);
    
})

//Close menu
closeMenu.addEventListener("click", () => {
  setTimeout(() => {
    logo.classList.remove("showmenu");
    menu.classList.remove("showmenu");
    mainLinks.classList.toggle("main-links-stop");
  }, 400)
})


