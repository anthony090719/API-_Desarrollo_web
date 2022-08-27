const {check} = require("express-validator");
const validateResults = require("../utils/handlevalidator")

const validatorGetItem = [
    check("Id")
    .exists()
    .notEmpty()
    .isMongoId(),
    (req,res,next) => {
        return validateResults(req, res, next)
    }
];


module.exports = {validatorGetItem};