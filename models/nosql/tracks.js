const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");
const TracksSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate:{
                validator:(req) => {
                    return true;
                },
                message: "ERROR_URL",
            },
        },
        artist:{
            name:{
                type:String,
            },
            nickname:{
                type:String,
            },
            nationality:{
                type:String,
            }, 
        },
        duration:{
            start:{
                type:Number,
            },
            end: {
                type:Number,
            },
        },
        mediaid:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps:true, //TODO createdAt, UpdatedAt
        versionKey:false
    }
);

TracksScheme.plugin(mongooseDelete, {overrideMethods: "all"});

module.exports = mongoose.model("tracks", TracksScheme);