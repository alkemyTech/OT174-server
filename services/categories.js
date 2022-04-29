const { HttpCodesEnum } = require("../enums/httpCodesEnum");
const categoriesRepository = require("../repositories/categories");

exports.create = async (res, name, image, description) => {
  try {
    const category = await categoriesRepository.create(
      name,
      image,
      description
    );
    return res.status(HttpCodesEnum.CREATED).json(category);
  } catch (err) {
    return res
      .status(HttpCodesEnum.SERVER_INTERNAL_ERROR)
      .json({ message: HttpCodesEnum.STATUS_SERVER_INTERNAL_ERROR });
  }
};
