const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/tracks");
const checkRol = require("../middleware/rol");

/**
 * lista los items
 */
router.get("/", authMiddleware, getItems);
/**
 * obtener detalles de los items
 */
 router.get("/:id",authMiddleware,validatorGetItem,getItem);
/**
 * crea un registro
 */
router.post("/",
authMiddleware,
checkRol(["user","admin"]),
validatorCreateItem,
 createItem);
/**
 * actualizar registro
 */
 router.put("/:id",authMiddleware,validatorGetItem,validatorCreateItem,updateItem);
 /**
  * eliminar registro
  */
  router.delete("/:id",authMiddleware,validatorGetItem,deleteItem);

module.exports = router;