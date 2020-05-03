import "./app3.css"
import $ from "jquery"
const active = localStorage.getItem("app3.active") === "yes"

const $square = $("#app3 .square")
// if (active) {
//     $square.addClass("active")

// } else {
//     $square.removeClass("active")
// }

$square.toggleClass("active", active)

$square.on("click", () => {
    if ($square.hasClass("active")) {
        $square.removeClass("active")
        localStorage.setItem("app3.active", "no")
    } else {
        $square.addClass("active")
        localStorage.setItem("app3.active", "yes")
    }
    // $square.toggleClass("active")
})