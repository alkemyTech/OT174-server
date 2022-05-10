const { Organization } = require("../models/index");

// find organization by id
async function findPublicDataById(organizationID) {
  try {
    const organization = await Organization.findOne({
      where: { id: organizationID },
      attributes: ["name", "image", "phone", "address"],
    });
    if (organization) {
      return organization;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

module.exports = {
  findPublicDataById,
};
