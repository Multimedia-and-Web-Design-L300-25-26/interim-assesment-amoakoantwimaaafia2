// controllers/cryptoController.js
import Crypto from "../models/Crypto.js";

// Get all
export const getAllCrypto = async (req, res) => {
  const crypto = await Crypto.find();
  res.json(crypto);
};

// Top gainers
export const getTopGainers = async (req, res) => {
  const data = await Crypto.find().sort({ change24h: -1 }).limit(10);
  res.json(data);
};

// New listings
export const getNewCrypto = async (req, res) => {
  const data = await Crypto.find().sort({ createdAt: -1 }).limit(10);
  res.json(data);
};

// Add crypto
export const addCrypto = async (req, res) => {
  try {
    const crypto = await Crypto.create(req.body);
    res.status(201).json(crypto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};