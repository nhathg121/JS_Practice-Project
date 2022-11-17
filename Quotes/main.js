"use strict";
const quotes = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.querySelector("#generate");

//get api
fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    btn.addEventListener("click", function () {
      var index = Math.floor(Math.random() * data.length);
      var quote = data[index];
      if (quote.author == null) {
        quote.author = "No Name";
      }
      quotes.innerHTML = quote.text;
      author.innerHTML = "–" + quote.author;
    });
  });
