function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    const clean = item.replace("./", "").split(";")
    const productType = clean[0]
    const title = clean[1]
    const price = clean[2].split(".")[0]
    images[title] = {
      name: title,
      type: productType,
      price: price,
      location: r(item)
    };
  });
  return images;
}

const products = importAll(
  require.context("../img/products", false, /\.(png|jpe?g|svg|jfif)$/)
);

export default products;
