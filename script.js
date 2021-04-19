"use strict";
{
  let total = 0.00;

  document.getElementById("lime").addEventListener("mousedown", costFunction1);

  function costFunction1() {
    let price = 2.00;
    document.getElementById("cost").innerText = total += price;
  }

  document
    .getElementById("peanut")
    .addEventListener("mousedown", costFunction2);

  function costFunction2() {
    let price = 3.00;
    document.getElementById("cost").innerText = total += price;
  }

  document
    .getElementById("chocolate")
    .addEventListener("mousedown", costFunction3);

  function costFunction3() {
    let price = 4.00;
    document.getElementById("cost").innerText = total += price;
  }

  document.getElementById("fruit").addEventListener("mousedown", costFunction4);

  function costFunction4() {
    let price = 6.00;
    document.getElementById("cost").innerText = total += price;
  }
}

let theForm = document.getElementById("theForm");
let options = document.getElementById("coins");
let penny = document.getElementById("penny");
let nickel = document.getElementById("nickel");
let dime = document.getElementById("dime");
let quarter = document.getElementById("quarter");
let text1 = options[0].value;
let text2 = options[1].value;
let text3 = options[2].value;
let text4 = options[3].value;
let data = new FormData(theForm);

theForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newListItem = document.createElement("li");
  if (options.type === penny.type) {
    newListItem.innerText = `${text1}`;
    myList.append(newListItem);
  } else if (options.type === nickel.type) {
    newListItem.innerText = `${text2}`;
    myList.append(newListItem); 
  } else if (options.type === dime.type) {
    newListItem.innerText = `${text3}`;
    myList.append(newListItem);   
  } else if (options.type === quarter.type) {
    newListItem.innerText = `${text4}`;
    myList.append(newListItem);  
  }
  let myList = document.getElementById("coinspot");
  newListItem.classList.add("coins");
});

document.getElementById("on").addEventListener("click", turnOn);

function turnOn() {
  let bulbOn = document.getElementById("lightbulb");
  bulbOn.style.backgroundColor = "gold";
}

document.getElementById("off").addEventListener("click", turnOff);

function turnOff() {
  let bulbOff = document.getElementById("lightbulb");
  bulbOff.style.backgroundColor = "darkslateblue";
}

document.getElementById("toggle").addEventListener("click", toggle);

function toggle() {
  let toggle = document.getElementById("lightbulb");
  if (toggle.style.backgroundColor === "gold") {
    toggle.style.backgroundColor = "darkslateblue";
  } else if (toggle.style.backgroundColor === "darkslateblue") {
    toggle.style.backgroundColor = "gold";
  }
}

document.getElementById("end").addEventListener("click", endIt);

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
