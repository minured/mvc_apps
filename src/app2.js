import $ from "jquery"
import "./app2.css"
const $tabBar = $("#app2 .tab-bar")
const $tabContent = $("#app2 .tab-content")

//jquery的事件委托
$tabBar.on("click", "li", (e) => {
    let $li = $(e.currentTarget)

    $li.addClass("selected")
        .siblings().removeClass("selected")

    const index = $li.index()   //找到第几个 从0开始
    $tabContent
        //不要直接操作css，只操作类
        .children().eq(index).addClass("active")
        .siblings().removeClass("active")
})
//刚进页面的时候，模拟点一下
$tabBar.children().eq(0).trigger("click")