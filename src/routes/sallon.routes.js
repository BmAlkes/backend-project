const express = require("express");
const router = express.Router();
const Sallon = require("../models/salon.model");

router.post("/", async (req, res) => {
  try {
    const sallon = await new Sallon(req.body).save();
    res.json({ sallon });
  } catch (err) {
    res.json({ err: true, message: err.message });
  }
});

module.exports = router;
