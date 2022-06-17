const adminModel = require("../../../database/models").Admin;

const addAdmin = async (req, res) => {
  try {
    const admin = await adminModel.create(req.body);
    res.status(201).send(admin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const updateAdmin = async (req, res) => {
  try {
    const admin = await adminModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).send(admin);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  addAdmin,updateAdmin
};
