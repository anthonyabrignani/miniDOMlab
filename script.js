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

theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = document.querySelectorAll("option");
    let text = inputs[0].value;
    let newListItem = document.createElement("li");
    newListItem.innerText = `${text}`;
    let myList = document.getElementById("coinspot");
    myList.append(newListItem);
    myList.setAttribute();
    });




document
.getElementById("on")
.addEventListener("click", turnOn);

function turnOn() {
    let bulbOn = document.getElementById("lightbulb");
    bulbOn.style.backgroundColor = "gold";
  }

document
.getElementById("off")
.addEventListener("click", turnOff);

function turnOff() {
    let bulbOff = document.getElementById("lightbulb");
    bulbOff.style.backgroundColor = "darkslateblue";
  }

document
.getElementById("toggle")
.addEventListener("click", toggle);

function toggle() {
    let toggle = document.getElementById("lightbulb");
    if (toggle.style.backgroundColor === "gold") {
    toggle.style.backgroundColor = "darkslateblue";
    } else if (toggle.style.backgroundColor === "darkslateblue") {
    toggle.style.backgroundColor = "gold";
    }
    
  }

document
.getElementById("end")
.addEventListener("click", endIt);

function endIt() {
    let end1 = document.getElementById("on");
    end1.disabled = true;
    let end2 = document.getElementById("off");
    end2.disabled = true;
    let end3 = document.getElementById("toggle");
    end3.disabled = true;
    let bulbGone = document.getElementById("lightbulb");
    bulbGone.remove("lightbulb");
  }



