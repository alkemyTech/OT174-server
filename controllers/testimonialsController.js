const { Testimonial } = require("../models");
const {HttpCodesEnum} = require('../enums/httpCodesEnum');
exports.getAllTestimonials = async (req, res, next) => {};
exports.getTestimonialById = async (req, res, next) => {};
exports.createTestimonial = async (req, res, next) => {};
exports.deleteTestimonialById = async (req, res, next) => {};
exports.updateTestimonialById = async (req, res, next) => {

    try{
        const {name, content, image} = req.body;

        const testimonial = await Testimonial.findOne({where : {id:req.params.id}});

        if(!testimonial){
            return res.status(HttpCodesEnum.NOT_FOUND).send('Testimonial not found');
        }

        await testimonial.set({
            name,
            content,
            image
        });

        await testimonial.save();

        return res.status(HttpCodesEnum.UPDATED).json(testimonial);

    }catch(err){
        return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({message : err.message});
    }

};
