import $ from "jquery"
import "./app1.css"
const $add1 = $("#add1")
const $minus1 = $("#minus1")
const $mul2 = $("#mul2")
const $divide2 = $("#divide2")
const $number = $("#number")

const n = localStorage.getItem("n") || n
console.log(n)
$number.text(n)

$add1.on("click", () => {
    let n = parseInt($number.text())
    n += 1
    $number.text(n)
    localStorage.setItem("n", n)
})
$minus1.on("click", () => {
    let n = parseInt($number.text())
    n -= 1
    $number.text(n)
    localStorage.setItem("n", n)

})
$mul2.on("click", () => {
    let n = parseInt($number.text())
    n *= 2
    $number.text(n)
    localStorage.setItem("n", n)

})
$divide2.on("click", () => {
    let n = parseInt($number.text())
    n /= 2
    $number.text(n)
    localStorage.setItem("n", n)

})