function calc() {
  var a = document.equation.a.value;
  var b = document.equation.b.value;
  var c = document.equation.c.value;
  var x1;
  var x2;
  var d = b * b - 4 * a * c;
  if (isFinite(d)) {
    if (d > 0) {
      x1 = -b / (2 * a) - Math.sqrt(d) / (2 * a);
      x2 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
      document.getElementById("d").innerHTML = "D = " + d;
      document.getElementById("x1").innerHTML = "x1 = " + x1;
      document.getElementById("x2").innerHTML = "x2 = " + x2;
    } else if (d === 0) {
      x1 = (-b / 2) * a;
      document.getElementById("d").innerHTML = "D = " + d;
      document.getElementById("x1").innerHTML = "x = " + x1;
      document.getElementById("x2").innerHTML = "";
    } else {
      document.getElementById("d").innerHTML = "D = " + d;
      document.getElementById("x1").innerHTML = "Решения - нет";
      document.getElementById("x2").innerHTML = "";
    }
  } 
}
