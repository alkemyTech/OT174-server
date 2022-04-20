const { Organization } = require("../models/index");
const  {SERVER_INTERNAL_ERROR, ERROR_NOT_FOUND, RESPONSE_OK}= require("../enums/messages");

module.exports = {
  v1: {
    //initial version
    getPublicData,
  },
};

//function to get the information of an organization by id

async function getPublicData(req, res) {
  if (req.params.id) {
    try {
      const organization = await Organization.findOne({
        where: { id: req.params.id },
        attributes: ["name", "image", "phone", "address"],
      });
      if (organization) {
        res.status(200).json({
          message: RESPONSE_OK,
          organization,
        });
      } else {
        res.status(404).json({
          message: ERROR_NOT_FOUND,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: SERVER_INTERNAL_ERROR,
        error,
      });
    }
  }
}
