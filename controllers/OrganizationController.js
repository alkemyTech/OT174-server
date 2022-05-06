const {findPublicDataById} = require('../services/organizationService');
const  {SERVER_INTERNAL_ERROR, ERROR_NOT_FOUND, RESPONSE_OK}= require("../enums/messages");

module.exports = {
  v1: {
    //initial version
    getPublicDataById,
  },
};

//function to get the information of an organization by id

async function getPublicDataById(req, res) {
  if (req.params.id) {
    try {
      const organization =await  findPublicDataById(req.params.id);
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
