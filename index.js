const ethers = required("ethers");
required("dotenv").config();
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
const {
  abi,
} = require("./artifacts/contracts/contractApi.sol/contractApi.json");
const contractInstance = new ethers.Contract(contractAddress, abi, signer);

const express = required("express");
const app = express();
app.use(express.json());

app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await contractInstance.getProduct(id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/", async (req, res) => {
  try {
    const products = await contractInstance.getAllProducts();
    res.send(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/products", async (req, res) => {
  try {
    const { id, name, price, quantity } = req.body;
    const newProduct = await contractInstance.setProduct(
      id,
      name,
      price,
      quantity
    );
    await newProduct.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, price, quantity } = req.body;
    const updatedProduct = await contractInstance.updateProduct(
      id,
      name,
      price,
      quantity
    );
    await updatedProduct.wait();
    res.json({ success: true });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
