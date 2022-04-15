module.exports = {
  isAdmin: (req, res, next) => {
    return req.user.roleId === 1
      ? next()
      : res.status(403).json({ message: "Forbidden" });
  },
};
