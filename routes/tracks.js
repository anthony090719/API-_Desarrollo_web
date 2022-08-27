const express = require("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");

/**
 * lista los items
 */
router.get("/", getItems);
/**
 * obtener detalles de los items
 */
 router.get("/:id",validatorGetItem,getItem);
/**
 * crea un registro
 */
router.post("/",validatorCreateItem , createItem);
/**
 * actualizar registro
 */
 router.put("/:id",validatorGetItem,validatorCreateItem,updateItem);
 /**
  * eliminar registro
  */
  router.delete("/:id",validatorGetItem,deleteItem);

module.exports = router;