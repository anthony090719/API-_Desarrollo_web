const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth");
const router = express.Router();
const {validatorRegister, validatorLogin} = require ("../validators/auth");
const { loginCtrl } = require("../controllers/auth");

/**
 * http://Localhost:3001/api
 * 
 * Route register new user
 * @openapi
 * /auth/register:
 *       post:
 *           tags:
 *               - auth
 *           sumary: "Register nuevo usuario"
 *           description:"esta ruta es para registrar un nuevo usuario"
 *           requestBody:
 *               content:
 *                    application/json:
 *                         schema:
 *                             $ref:"#/components/schemas/authRegister"
 *           responses:
 *                  '201':
 *                      description: el usuario se registra de manera correcta
 *                  '403':
 *                      description: error por validacion
 */
router.post("/register",validatorRegister,registerCtrl);

router.post("/login",validatorLogin,loginCtrl);


module.exports = router;