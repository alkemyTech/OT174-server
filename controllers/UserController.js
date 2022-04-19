const { User } = require("../models/index");

module.exports = {
  v1: {
    // Initial version
    deleteUser,
  },
};

async function deleteUser(req, res) {
  try {

    //delete user by id
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        data: "",
      });
    }
    await user.destroy();
    res.send({
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: " Erorr: " + error.message,
      data: "",
    });
  }
}
