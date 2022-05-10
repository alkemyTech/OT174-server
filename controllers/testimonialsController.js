const { Testimonial } = require("../models");
const {HttpCodesEnum} = require('../enums/httpCodesEnum');
exports.getAllTestimonials = async (req, res, next) => {};
exports.getTestimonialById = async (req, res, next) => {};
exports.createTestimonial = async (req, res, next) => {};
exports.deleteTestimonialById = async (req, res, next) => {

    try{
        const testimonial = await Testimonial.findOne({where : {id:req.params.id}});

        if(!testimonial){
            return res.status(HttpCodesEnum.NOT_FOUND).send('Testimonial not found');
        }

        await testimonial.destroy();

        return res.sendStatus(HttpCodesEnum.DELETED);

    }catch(err){
        return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({message : err.message});
    }

};
exports.updateTestimonialById = async (req, res, next) => {};
