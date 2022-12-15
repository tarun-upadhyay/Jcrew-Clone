const express = require("express");
const productRouter = express.Router();

const { WomenModel, MenModel } = require("../models/productModel");

productRouter.get("/women", async (req, res) => {
  const {productID} = req.params;
  const params = req.query
  //console.log(params)
  console.log(productID,10)
if(productID){
  try {
    const products = await WomenModel.find({_id:params});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
}else{
  try {
    const products = await WomenModel.find(params);
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
}
  


});
productRouter.post("/women", async (req, res) => {
  const payload = req.body;
  const product = new WomenModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});

productRouter.get("/men", async (req, res) => {
  const params = req.query;

  try {
    const products = await MenModel.find(params);
    res.send(products);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});
productRouter.post("/men", async (req, res) => {
  const payload = req.body;
  const product = new MenModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});

module.exports = { productRouter };
