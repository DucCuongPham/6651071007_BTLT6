$(document).ready(function() {
    $("#linkForm").submit(function(event) {
        event.preventDefault();
        let link = $("#linkInput").val();
        if (link === "") {
            alert("Vui lòng nhập đường link!");
            return;
        }
        if (confirm("Bạn có muốn chuyển đến trang:\n" + link + "?")) {
            window.location.href = link;
        }
    });
});