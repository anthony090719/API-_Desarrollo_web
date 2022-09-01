require("dotenv").config()
const express = require("express");
const cors = require("cors");
const dbConnectNosql = require('./config/mongo');
const {dbConnectMySql} = require("./config/mysql");
const app = express()


const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000

/**
 * aqui invocamos a las rutas
 */
//TODO localhost/api________
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

(ENGINE_DB == `nosql`) ? dbConnectNosql() : dbConnectMySql();
