function printing() {
    document.getElementById("output").style.display = "block";
    var name = document.getElementById("name").value;
    var rno = document.getElementById("rno").value;
    var dept = document.getElementById("dept").value;
    var color = document.getElementById("color").value;
    document.getElementById("container").style.color = color;
    document.getElementById("outt").innerHTML = name + " (" + rno + ") " + "of " + dept;
}