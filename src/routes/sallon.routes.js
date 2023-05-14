const express = require("express");
const router = express.Router();
const Sallon = require("../models/salon.model");
const Service = require("../models/service");

router.post("/", async (req, res) => {
  try {
    const sallon = await new Sallon(req.body).save();
    res.json({ sallon });
  } catch (err) {
    res.json({ err: true, message: err.message });
  }
});

router.get("/service/:sallonId", async (req, res) => {
  try {
    const { id } = req.params;
    const services = await Service.find({ id: id, status: "A" }).select(
      "_id title"
    );
    res.json({
      services: services.map((s) => ({ label: s.title, value: s._id })),
    });
  } catch (err) {
    res.json({ err: true, message: err.message });
  }
});

module.exports = router;
