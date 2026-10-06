console.log("cau1.js đã chạy");
let button=document.getElementById("jsstyle");
$(button).click(function(){
    $("#text").css({
        "font-size":"33px",
        "font-family":"Times New Roman",
        "color":"blue",
    });
});