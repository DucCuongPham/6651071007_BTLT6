$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault();
        let username = $("#username").val().trim();
        let sex = $("#sex").val();
        let email = $("#email").val().trim();
        let birthday = $("#birthday").val().trim();
        if (username === "") {
            alert("Vui lòng nhập tên người dùng!");
            $("#username").focus();
            return;
        }
        if (username.length < 5) {
            alert("Tên người dùng phải có ít nhất 5 ký tự!");
            $("#username").focus();
            return;
        }
        if (sex === "") {
            alert("Vui lòng chọn giới tính!");
            $("#sex").focus();
            return;
        }
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            alert("Vui lòng nhập Email!");
            $("#email").focus();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Email không đúng định dạng!");
            $("#email").focus();
            return;
        }
        if (birthday === "") {
            alert("Vui lòng nhập ngày sinh!");
            $("#birthday").focus();
            return;
        }
        let birthdayRegex = /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/;
        let match = birthday.match(birthdayRegex);

        if (!match) {
            alert("Ngày sinh phải có dạng MM/DD/YYYY hoặc MM-DD-YYYY!");
            $("#birthday").focus();
            return;
        }

        // Lấy tháng, ngày, năm
        let month = parseInt(match[1]);
        let day = parseInt(match[2]);
        let year = parseInt(match[3]);
        if (month < 1 || month > 12) {
            alert("Tháng phải nằm trong khoảng từ 1 đến 12!");
            $("#birthday").focus();
            return;
        }
        let date = new Date(year, month - 1, day);
        if (
            date.getFullYear() !== year ||
            date.getMonth() !== month - 1 ||
            date.getDate() !== day
        ) {
            alert("Ngày sinh không hợp lệ!");
            $("#birthday").focus();
            return;
        }
        let currentYear = new Date().getFullYear();
        if (year > currentYear) {
            alert("Năm sinh không được lớn hơn năm hiện tại!");
            $("#birthday").focus();
            return;
        }
        alert(
            "Đăng ký thành công!\n\n" +
            "Tên người dùng: " + username + "\n" +
            "Giới tính: " + (sex === "male" ? "Nam" : "Nữ") + "\n" +
            "Email: " + email + "\n" +
            "Ngày sinh: " + birthday
        );
    });

});