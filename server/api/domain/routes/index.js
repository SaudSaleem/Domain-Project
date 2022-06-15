const express = require("express");
const router = express.Router();

const domainController = require("../controllers");

router.get("/",domainController.getDomains);
router.get("/:id",domainController.getdomainById);
router.post("/",domainController.addDomain);
router.patch("/:id",domainController.updateDomain);
router.delete("/:id",domainController.deleteDomain);
module.exports = router;
