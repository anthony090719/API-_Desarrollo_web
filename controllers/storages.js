const fs = require("fs");
const { dirname } = require("path");
const {storageModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname} /../storage`;
/**
 * obtener lista de la BD
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) =>  {
    try{
        const data = await storageModel.find({});
    }catch(e){
        handleHttpError(res,"ERROR_LIST_ITEM")
    }
};

/**
 * obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) =>  {
    try{
        const {id} = matchedData(req)
        const data = await storageModel.findById(id);
    }catch(e){
        handleHttpError(res,"ERROR_DETAIL_ITEM")
    }
};

/**
 * insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem =async (req, res) =>  {
    try{
        const { body, file} = req
    console.log(file)
    const fileData = {
        filename: file.filename
    }
    const data = await storageModel.create(body)
    res.send({file})

    }catch(e){
        handleHttpError(res, "ERROR_DETAIL_ITEM")

    }

};

/**
 * actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) =>  {};

/**
 * eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem =async (req, res) =>  {
    try{
        const {id} = matchedData(req)
        const dataFile = await storageModel.findById(id);
        await storageModel.deleteOne(id)
        const {filename} = data;
        const filepath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filepath);
        const data = {
            filepath,
            deleted:1
        }
        res.send({data});

    }catch(e){
        handleHttpError(res,"ERROR_DETAIL_ITEM")
    }
};

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};