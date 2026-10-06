        let operation = "";
        $(".operator").click(function() {
            operation = $(this).data("op");
            $(".operator").css("background-color", "");
            $(this).css("background-color", "lightblue");
        });
        $("#equal").click(function() {
            let num1 = Number(document.getElementById("num1").value);
            let num2 = Number(document.getElementById("num2").value);
            let result;
            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    if (num2 === 0) {
                        alert("Không thể chia cho 0!");
                        return;
                    }
                    result = num1 / num2;
                    break;
                case "^":
                    result = Math.pow(num1, num2);
                    break;
                default:
                    alert("Vui lòng chọn phép toán!");
                    return;
            }
            document.getElementById("result").value = result;
        });