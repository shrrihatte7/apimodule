const express = require("express");
const router = express.Router();
const {getAllProducts, getAllProductsTesting} = require("../controllers/product");


// router.route("/").get(getAllProducts);
router.get("/",getAllProducts);
router.get("/testing",getAllProductsTesting);

module.exports = router;