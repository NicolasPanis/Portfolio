const express = require("express");

const router = express.Router();

const workControllers = require("./controllers/workControllers");

router.get("/works", workControllers.browse);
router.get("/items/:id", workControllers.read);
router.put("/items/:id", workControllers.edit);
router.post("/items", workControllers.add);
router.delete("/items/:id", workControllers.destroy);

module.exports = router;
