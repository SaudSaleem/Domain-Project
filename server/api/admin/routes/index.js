const express = require("express");
const router = express.Router();

const adminController = require("../controllers");
const adminMiddleware = require("../../../middlewares/admin");
const { verifyToken } = require("../../../middlewares/auth");

router.post(
  "/",
  verifyToken,
  adminMiddleware.validateAdmin,
  adminController.addAdmin
);
router.patch(
    "/:id",
    verifyToken,
    adminMiddleware.validateAdminUpdation,
    adminController.updateAdmin
  );
module.exports = router;
