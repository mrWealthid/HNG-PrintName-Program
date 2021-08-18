"use strict";

// Task No_2 A simple program that prints my Name using javascript;

const printName = (firstName, lastName) => {
  return `Hi, My Name Is  ${firstName}  ${lastName} 😊 `;
};

//Print to the DOM
document.getElementById("nameHolder").innerText = printName("Wealth", "Iduwe");

//Print to console
console.log(printName("Wealth", "Iduwe"));
