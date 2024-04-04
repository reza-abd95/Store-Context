function shortenText(word) {
  let newWord = word.split(" ").slice(0, 3).join(" ");
  return newWord;
}

export { shortenText };
