const adminModel = require("../../../database/models").Admin;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
// get config vars
dotenv.config();
const login = async (req, res) => {
  try {
    const admin = await adminModel.findOne({
      where: { email: req.body.email },
    });
    if (
      admin &&
      (await bcrypt.compareSync(req.body.password, admin.password))
    ) {
      // check admin found and verify password
      const token = jwt.sign(
        // authentication successful
        { id: admin.id, email: req.body.email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "12h",
        }
      );
      // save admin token
      admin.update({
        token,
      });
      res.status(200).json({ admin });
    } else res.status(400).send("Invalid Credentials");
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const logout = async (req, res) => {
  try {
    const admin = await adminModel.findOne({ where: { id: req.body.id } });
    admin.update({
      token: null,
    });
    res.status(200).json({ message: "logged out successfully." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  login,
  logout,
};
