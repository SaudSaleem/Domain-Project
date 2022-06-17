const express = require("express");
const router = express.Router();

const domainController = require("../controllers");
const { verifyToken } = require("../../../middlewares/auth");

router.get("/", verifyToken, domainController.getDomains);
router.get("/:id", verifyToken, domainController.getdomainById);
router.post("/", verifyToken, domainController.addDomain);
router.patch("/:id", verifyToken, domainController.updateDomain);
router.delete("/:id", verifyToken, domainController.deleteDomain);
module.exports = router;
