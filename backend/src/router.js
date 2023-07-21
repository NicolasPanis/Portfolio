const express = require("express");
const multer = require("multer");

const router = express.Router();

const workControllers = require("./controllers/workControllers");

// router.put("/works/:id", workControllers.edit);
// router.post("/works", workControllers.add);
// router.delete("/works/:id", workControllers.destroy);

const tagControllers = require("./controllers/tagControllers");

router.get("/tags", tagControllers.browse);
router.get("/tags/:id", tagControllers.read);
router.put("/tags/:id", tagControllers.edit);
router.post("/tags", tagControllers.add);
router.delete("/tags/:id", tagControllers.destroy);

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets/images");
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const extension = fileArray.pop();
    const fileName = fileArray.join("-").split(" ").join("-");
    cb(null, `${fileName}_${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: "5MB" },
});
router.get("/works", workControllers.browse);
router.get("/works/:id", workControllers.read);
router.put(
  "/works/:id",
  upload.fields([
    { name: "image", count: 1 },
    { name: "image2", count: 1 },
    { name: "image3", count: 1 },
  ]),
  workControllers.edit
);
router.post(
  "/works",
  upload.fields([
    { name: "image", count: 1 },
    { name: "image2", count: 1 },
    { name: "image3", count: 1 },
  ]),
  workControllers.add
);
router.delete(
  "/works/:id",
  upload.fields([
    { name: "image", count: 1 },
    { name: "image2", count: 1 },
    { name: "image3", count: 1 },
  ]),
  workControllers.destroy
);

module.exports = router;
