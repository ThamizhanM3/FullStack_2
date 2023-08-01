function calculate() {
    var num1 = parseInt(document.getElementById("num_1").value);
    var num2 = parseInt(document.getElementById("num_2").value);
    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");
    if(add.checked == true){
        document.getElementById("result").value = num1 + num2;
    }
    else if (sub.checked == true) {
        document.getElementById("result").value = num1 - num2;
    }
    else if (mul.checked == true) {
        document.getElementById("result").value = num1 * num2;
    }
    else if (div.checked == true) {
        document.getElementById("result").value = num1 / num2;
    }
    else{
        document.getElementById("result").value = "999999999999999";

    }
}