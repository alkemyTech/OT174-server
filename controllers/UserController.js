const { User } = require("../models/index");
const { RESPONSE_OK, SERVER_INTERNAL_ERROR } = require("../enums/messages");

module.exports = {
  v1: {
    // Initial version
    deleteUserById,
  },
};

async function deleteUserById(req, res) {
  try {
    //delete user by id
    const deletedUser = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    // deletedUser =1 if user deleted successfully and deletedUser=0 if not exist.
    res.status(200).json({
      message: RESPONSE_OK,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: SERVER_INTERNAL_ERROR,
    });
  }
}
