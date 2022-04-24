const { News } = require('../models/index');


const deleteNewsById = async (req, res) => {
    try {

        const deletedNews = await News.destroy({ where: { id: req.params.id } });

        if (!deletedNews) {
            return res.status(404).send('News not found');
        };

        return res.sendStatus(204)

    } catch (err) {
        return res.status(500).json({message: err.message});
    }

}

module.exports = {
    deleteNewsById
}
