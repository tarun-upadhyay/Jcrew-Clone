const express = require("express");
const productRouter = express.Router();

const { WomenModel, MenModel } = require("../models/productModel");

productRouter.get("/women", async (req, res) => {

  try {
    const products = await WomenModel.find({});

  const params = req.query;

  try {
    const products = await WomenModel.find(params);

    res.send(products);
  } catch (err) {
    console.log(err);
    res.send({ err: "something went wrong" });
  }
});


productRouter.get("/women/:productID", async (req, res) => {
  const { productID } = req.params;
  if (productID) {
    try {
      const products = await WomenModel.find({ _id: productID });
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  } else {
    try {
      const products = await WomenModel.find({});
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  }
});

productRouter.post("/women/add", async (req, res) => {

productRouter.post("/women", async (req, res) => {

  const payload = req.body;
  const product = new WomenModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});

////////////////////////////////////////////////////////////////////
productRouter.get("/men/:productID", async (req, res) => {
  const { productID } = req.params;
  if (productID) {
    try {
      const products = await MenModel.find({ _id: productID });
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  } else {
    try {
      const products = await  MenModel.find({});
      res.send(products);
    } catch (err) {
      console.log(err);
      res.send({ err: "something went wrong" });
    }
  }
});

productRouter.get("/men", async (req, res) => {
  try {
    const products = await MenModel.find({});


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


productRouter.post("/men/add", async (req, res) => {

productRouter.post("/men", async (req, res) => {

  const payload = req.body;
  const product = new MenModel(payload);
  await product.save();
  res.send({ msg: "Added Succeffully" });
});


productRouter.patch("/men/update/:productID", async (req, res)=>{
  const  productID  = req.params.productID;
  const payload = req.body;
try{
const query = await MenModel.findByIdAndUpdate({_id:productID}, payload);
res.send({msg:"upadted succesflly"})
}catch(err){
  res.send({err:err})
console.log(err)
}
})

productRouter.patch("/women/update/:productID", async (req, res)=>{
  const  productID  = req.params.productID;
  const payload = req.body;
try{
const query = await WomenModel.findByIdAndUpdate({_id:productID}, payload);
res.send({msg:"upadted succesflly"})
}catch(err){
  res.send({err:err})
console.log(err)
}
})


module.exports = { productRouter };
