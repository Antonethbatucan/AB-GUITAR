let menu = document.querySelector("#menu-icon");
let head = document.querySelector(".head");

menu.addEventList("click", function () {
	navbar.classlist.toggle("active");
});


window.onscroll =() =>{
	navbar.classlist.remove("active");
};