const { Organization } = require("../models/index");

module.exports = {
  v1: {
    //initial version
    getPublicData,
  },
};
//function to get the information of an organization

async function getPublicData(req, res) {
  if (req.query.name) {
    try {
      let organization = await Organization.findOne({
        where: { name: req.query.name },
        attributes: ["name", "image", "phone", "address"],
      });
      if (organization) {
        res.status(200).json({
          ok: true,
          organization,
        });
      } else {
        res.status(404).json({
          ok: false,
          message: "Organization not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error getting organization",
        error,
      });
    }
  }
  else if(req.query.id){
    try {
        let organization = await Organization.findOne({
            where: { id: req.query.id },
            attributes: ["name", "image", "phone", "address"],
        });
        if (organization) {
            res.status(200).json({
            ok: true,
            organization,
            });
        } else {
            res.status(404).json({
            ok: false,
            message: "Organization not found",
            });
        }
        } catch (error) {
        res.status(500).json({
            ok: false,
            message: "Error getting organization",
            error,
        });
        }
    }
}
