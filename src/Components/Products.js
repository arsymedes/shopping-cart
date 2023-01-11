function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    const clean = item.replace("./", "").split(";")
    const productType = clean[0]
    const name = clean[1]
    const price = clean[2].split(".")[0]
    const path = name.replace(/ /g, "-")
    images[name] = {
      name: name,
      type: productType,
      price: price,
      location: r(item),
      path: path,
    };
  });
  return images;
}

const products = importAll(
  require.context("../img/products", false, /\.(png|jpe?g|svg|jfif)$/)
);

export default products;
