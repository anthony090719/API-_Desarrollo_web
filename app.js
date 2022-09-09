require("dotenv").config()
const express = require("express");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const openApiConfiguration = require ("./docs/swagger");
const dbConnectNosql = require('./config/mongo');
const {dbConnectMySql} = require("./config/mysql");
const openApiConfiguration = require("./docs/swagger");
const app = express()


const ENGINE_DB = process.env.ENGINE_DB;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000;

/**
 * Definir ruta de  documentacion
 */

app.use('/documentation',
 swaggerUI.serve,
 swaggerUI.setup(openApiConfiguration))


/**
 * aqui invocamos a las rutas
 */
//TODO localhost/api________
app.use("/api", require("./routes"))

if(NODE_ENV !== 'test'){
    app.listen(port); 
};

(ENGINE_DB == `nosql`) ? dbConnectNosql() : dbConnectMySql();

module.exports = app;
