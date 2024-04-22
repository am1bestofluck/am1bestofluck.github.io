let displayed = "none";


function show_menu() {
    console.log("showed");
    // let item = document.getElementsByClassName("menued_item").item(0);
    // if (item.getAttribute("display", 'none')) {
    // item.setAttribute("display", "block");

    // item.onmoousenter = function() {
    let item_ = document.getElementsByClassName("hover_menu").item(0);
    console.log(item_);
    displayed = "grid";
    item_.display = displayed;
}

// item.replaceWith()

// }

// function no_nothing() {
//     console.log("...")

// }

function drop_menu() {
    console.log('droped');
    let item_ = document.getElementsByClassName("hover_menu").item(0);
    // document.getElementsByClassName("hover_menu").item(0).setAttribute("display", displayed);
    displayed = "none";
    document.getElementsByClassName("hover_menu").item(0).setAttribute("display", displayed);
    // document.ge


}