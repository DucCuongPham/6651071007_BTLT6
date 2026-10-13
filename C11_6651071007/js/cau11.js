
$(document).ready(function () {
    $("#fileupload").change(function () {
        var file = this.files[0];
        if (file) {
            var fileName = file.name;
            var lastDot = fileName.lastIndexOf(".");
            var extension = lastDot !== -1
                ? fileName.substring(lastDot + 1)
                : "Không có phần mở rộng";
            $(".filename").html(
                "Tên file: " + fileName +
                "<br>Phần mở rộng: " + extension
            );
            alert("Bạn đã chọn file: " + fileName);
        }
    });
});
