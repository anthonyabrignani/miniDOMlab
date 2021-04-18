"use strict";
{
    let total = 0;

  document
  .getElementById("lime")
  .addEventListener("mousedown", costFunction1);

  function costFunction1() {
    let price = 2.0;
    document.getElementById("cost").innerText = total += price;
  }

  document
    .getElementById("peanut")
    .addEventListener("mousedown", costFunction2);

  function costFunction2() {
    let price = 3.0;
    document.getElementById("cost").innerText = total += price;
  }

  document
    .getElementById("chocolate")
    .addEventListener("mousedown", costFunction3);

  function costFunction3() {
    let price = 4.0;
    document.getElementById("cost").innerText = total += price;
  }

  document
  .getElementById("fruit").
  addEventListener("mousedown", costFunction4);

  function costFunction4() {
    let price = 6.0;
    document.getElementById("cost").innerText = total += price;
  }
}




