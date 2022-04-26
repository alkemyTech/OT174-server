const { HttpCodesEnum } = require('../enums/httpCodesEnum');
const { News } = require('../models/index');


const deleteNewsById = async (req, res) => {
    try {

        const deletedNews = await News.destroy({ where: { id: req.params.id } });

        if (!deletedNews) {
            return res.status(HttpCodesEnum.NOT_FOUND).send('News not found');
        };

        return res.sendStatus(HttpCodesEnum.DELETED)

    } catch (err) {
        return res.status(HttpCodesEnum.SERVER_INTERNAL_ERROR).json({message: err.message});
    }

}

module.exports = {
    deleteNewsById
}
