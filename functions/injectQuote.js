import { getRandomQuote } from "./getRandomQuote.js";

var element = document.getElementById("quote");
element.innerHTML = getRandomQuote();
