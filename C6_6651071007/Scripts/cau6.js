function getOptions() {
    let options = $("#mySelect option");
    let count = options.length;
    let items = "";
    options.each(function() {
        items += $(this).text() + "\n";
    });
    alert("Số lượng mục: " + count + "\n\nCác mục:\n" + items);
}