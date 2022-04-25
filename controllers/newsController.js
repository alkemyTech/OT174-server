const { New } = require("../models/New");

const getNewById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newFound = await New.findOne({
      where: id,
    });

    if (!newFound) {
      return res.status(404).send("New not found");
    }

    return res.json({ New: newFound });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getNewById,
};