var menu = document.querySelector(".mynav");
var nav = document.querySelector(".menu");
var link = document.querySelector(".menu li");

menu.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle('open');
});