import { hasClass, addClass, removeClass } from "./utils";
import closeIcon from "../images/icons/zondicons/close.svg";
import menuIcon from "../images/icons/zondicons/menu.svg";

/*
Event listener for Toggle Nav Menu
*/

document.querySelectorAll("[id=menulink]").forEach((item) => {
	item.addEventListener("click", toggleMenu);
});
document.getElementById("toggleBtn").addEventListener("click", toggleMenu);

// Toggles the menu and menu icon
function toggleMenu(e) {
	const togmenu = document.getElementById("togmenu");
	if (hasClass(togmenu, "hidden")) {
		removeClass(togmenu, "hidden");
		// Change icon to close
		document.getElementById("ham").src = closeIcon;
	} else {
		addClass(togmenu, "hidden");
		// Change icon to hamburger
		document.getElementById("ham").src = menuIcon;
	}
}

/* Set copyright Year */
document.getElementById("year").innerHTML = new Date().getFullYear() + "&nbsp;";

/* Event Listener for show service arrow */

document
	.getElementById("show-service1")
	.addEventListener("click", toggleServiceDesc);
document
	.getElementById("show-service2")
	.addEventListener("click", toggleServiceDesc);
document
	.getElementById("show-service3")
	.addEventListener("click", toggleServiceDesc);
document
	.getElementById("show-service4")
	.addEventListener("click", toggleServiceDesc);
document
	.getElementById("show-service5")
	.addEventListener("click", toggleServiceDesc);
document
	.getElementById("show-service6")
	.addEventListener("click", toggleServiceDesc);

function toggleServiceDesc(event) {
	const arrowdiv = event.currentTarget.id;
	const arrowdivdom = document.getElementById(arrowdiv);
	const servicedesc = "service-desc" + arrowdiv.charAt(arrowdiv.length - 1);
	const servicedescdom = document.getElementById(servicedesc);
	const downarrowicon = `<i class="fas fa-angle-double-down fa-lg"></i>`;
	const uparrowicon = `<i class="fas fa-angle-double-up fa-lg"></i>`;

	if (hasClass(servicedescdom, "service-card-desc-height")) {
		removeClass(servicedescdom, "service-card-desc-height");
		addClass(servicedescdom, "service-card-desc-height-auto");
		arrowdivdom.innerHTML = uparrowicon;
	} else {
		removeClass(servicedescdom, "service-card-desc-height-auto");
		addClass(servicedescdom, "service-card-desc-height");
		arrowdivdom.innerHTML = downarrowicon;
	}
}
