const Product = require("../model/product");

exports.getAddProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render("admin/add_product", {
      pageTitle: "ADD PRODUCTS",
      path: "/admin/add-product",
    });
  };
  
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};
  
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products ",
    });
  });
}