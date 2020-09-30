var equation = "";
var contain = [];
var sign = "";
var ck = 0;
var value1 = "";
var value2 = "";

function addMe(value) {
  equation += value;

  if (value == "*" || value == "/" || value == "+" || value == "-") {
    sign = value;
    ck = 1;
  } else if (ck === 1) {
    value2 += value;
  } else {
    value1 += value;
  }

  document.getElementById("check").innerHTML = equation;
}

function calculate() {
  console.log(value1);
  console.log(value2);
  if (sign === "+") {
    document.getElementById("check").innerHTML =
      Number(value1) + Number(value2);
  } else if (sign === "-") {
    document.getElementById("check").innerHTML =
      Number(value1) - Number(value2);
  } else if (sign === "*") {
    document.getElementById("check").innerHTML =
      Number(value1) * Number(value2);
  } else if (sign === "/") {
    document.getElementById("check").innerHTML =
      Number(value1) / Number(value2);
  }
  equation = "";
  value1 = "";
  value2 = "";
  sign = "";
  ck = 0;
}
