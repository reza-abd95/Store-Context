function shortenText(word) {
  let newWord = word.split(" ").slice(0, 3).join(" ");
  return newWord;
}

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchedProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category == category);
  return filteredProducts;
};

export { shortenText, searchProducts, filterProducts };
