import { data } from "../data/data.js";

export const getRandomQuote = () => {
  const quotes = data[0].quotes;

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return quote;
};
