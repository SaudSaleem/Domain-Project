const express = require("express");
const router = express.Router();

const authController = require("../controllers");
const adminMiddleware = require("../../../middlewares/admin")
router.post("/login",authController.login);
router.post("/logout",authController.logout);
module.exports = router;
