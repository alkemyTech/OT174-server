const {RESPONSE_OK} = require('../enums/messages');

const {
  validateExistsToken,
  getUserIdByToken,
} = require("../services/tokenService");

async function validateToken(req, res) {
  const token = validateExistsToken(req, res);
  const id = getUserIdByToken(token);
  res.status(200).json({
    auth: RESPONSE_OK,
    id: id,
  });
}

module.exports = {  
  validateToken,
};