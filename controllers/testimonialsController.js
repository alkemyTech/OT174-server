const { Testimonial } = require("../models");
const {HttpCodesEnum} = require('../enums/httpCodesEnum');
exports.getAllTestimonials = async (req, res, next) => {};
exports.getTestimonialById = async (req, res, next) => {};
exports.createTestimonial = async (req, res, next) => {
    try{
        const {name, content, image} = req.body;
        
        if(!name || !content){
            return res.status(HttpCodesEnum.BAD_REQUEST).send(HttpCodesEnum.STATUS_BAD_REQUEST);
        }
        
        const testimonial = await Testimonial.create({name, content, image});

        return res.status(HttpCodesEnum.CREATED).json(testimonial);

    }catch(err){
        return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({message : err.message});
    }
    
};
exports.deleteTestimonialById = async (req, res, next) => {};
exports.updateTestimonialById = async (req, res, next) => {};
