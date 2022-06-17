const Joi = require("joi");
//method to validate admin data
function validateAdmin(req, res, next) {
  try {
    const schema = Joi.object().keys({
      first_name: Joi.string()
        .regex(/^[A-Za-z]+$/)
        .min(3)
        .max(30)
        .required(),
      last_name: Joi.string()
        .regex(/^[A-Za-z]+$/)
        .min(3)
        .max(30)
        .required(),
      email: Joi.string()
        .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .min(4)
        .max(30)
        .required(),
      password: Joi.string().min(5).max(30).required(),
    });
    const result = schema.validate(req.body);

    if (result.error) {
      {
        return res.status(400).json({
          success: false,
          msg: result.error.details.map((i) => i.message).join(","),
        });
      }
    } else next();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
//validation for PUT/UPDATE request
function validateAdminUpdation(req, res, next) {
  try {
    const schema = Joi.object().keys({
      first_name: Joi.string()
        .regex(/^[A-Za-z]+$/)
        .min(3)
        .max(30)
        .optional(),
      last_name: Joi.string()
        .regex(/^[A-Za-z]+$/)
        .min(3)
        .max(30)
        .optional(),
      email: Joi.string()
        .regex(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        .min(4)
        .max(30)
        .optional(),
      password: Joi.string().min(5).max(30).optional(),
    });
    const result = schema.validate(req.body);

    if (result.error) {
      {
        return res.status(400).json({
          success: false,
          msg: result.error.details.map((i) => i.message).join(","),
        });
      }
    } else next();
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
module.exports = {
  validateAdmin,
  validateAdminUpdation,
};
