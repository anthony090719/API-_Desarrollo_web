const express = require ("express");
const router = express.Router();
const uploadMiddleware = require ("../utils/handleStorage");
const {getItems,getItem,updateItem,deleteItem,createItem} = require("../controllers/storages");
const {validatorGetItem} = require ("../validators/storage");

/**
 * Get all storages
 * @openapi
 * /storage:
 *       get:
 *           tags:
 *           sumary: "listar archivos"
 *           description:obten todas las listas de los archivos
 *           security:
 *               - bearerAuth:[]
 *           responses:
 *                  '200':
 *                      description: retorna la lista de los archivos
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/storage'
 *                  '422':
 *                      description: error de validacion
 */

router.get("/",getItems);
/**
 * Get detail from storages
 * @openapi
 * /storage/{id}:
 *       get:
 *           tags:
 *              -storage
 *           sumary: "Detalle storage"
 *           description:obten el detalle de una storage
 *           security:
 *               - bearerAuth:[]
 *              parameters:
 *              - name: id
 *              in: path
 *              description: ID de storage a retornar
 *              required: true
 *              schema:
 *              type: string
 *           responses:
 *                  '200':
 *                      description: retorna la lista de los archivos
 *                      content:
 *                          application/json:
 *                              schema:
 *                                  type: array
 *                                  items:
 *                                      $ref: '#/components/schemas/storage'
 *                  '422':
 *                      description: error de validacion
 */

router.get("/:id",validatorGetItem,getItem);

router.get("/:id",validatorGetItem,deleteItem);

router.post("/",uploadMiddleware.single("myfile"),createItem);

module.exports = router;