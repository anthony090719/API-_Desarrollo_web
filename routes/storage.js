const express = require ("express");
const router = express.Router();
const uploadMiddleware = require ("../utils/handleStorage");
const {getItems,getItem,updateItem,deleteItem,createItem} = require("../controllers/storages");
const {validatorGetItem} = require ("../validators/storage");

router.get("/",getItems);

router.get("/:id",validatorGetItem,getItem);

router.get("/:id",validatorGetItem,deleteItem);

router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router;