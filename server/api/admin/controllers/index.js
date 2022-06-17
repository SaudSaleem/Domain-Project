const adminModel = require("../../../database/models").Admin;

const addAdmin = async (req, res) => {
  try {
    const [admin, created] = await adminModel.findOrCreate({
      where: { email: req.body.email },
      defaults: req.body,
    });
    created
      ? res.status(201).send(admin)
      : res.status(400).json({ error: "Admin already exist" });
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
  addAdmin,
  updateAdmin,
};
