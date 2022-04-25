const { Categories } = require('../models/index');


const deleteCategoriesById = async (req, res) => {
    try {

        const deletedCategories = await Categories.destroy({ where: { id: req.params.id } });

        if (!deletedCategories) {
            return res.status(404).send('Categories not found');
        };

        return res.sendStatus(204)

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

}


module.exports = {
    deleteCategoriesById
}