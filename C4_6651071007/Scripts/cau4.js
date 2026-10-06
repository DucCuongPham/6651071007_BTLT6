function removecolor() {
    let select = document.getElementById("colorSelect");
    let index = select.selectedIndex;
    $(select).find("option").eq(index).remove();
}