const { News } = require("../models");
const { HttpCodesEnum } = require('../enums/httpCodesEnum');

exports.getAllNews = async (req, res, next) => { };
exports.getNewById = async (req, res, next) => { };
exports.createNew = async (req, res, next) => { };
exports.updateNewById = async (req, res, next) => { };
exports.deleteNewById = async (req, res, next) => {
   try {

        const deletingNew = await News.findOne({ where: { id: req.params.id } });   //I had to name it "deletingNew" because only "new" is a reserved word

        if (!deletingNew) {
            return res.status(HttpCodesEnum.NOT_FOUND).send('New not found');
        };

        await deletingNew.destroy();

        return res.sendStatus(HttpCodesEnum.DELETED)

    } catch (err) {
        return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({message: err.message});
    }  
};



