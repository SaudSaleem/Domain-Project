const express = require("express");
const router = express.Router();

const serverController = require("../controllers");
const { verifyToken } = require("../../../middlewares/auth");

router.get("/", verifyToken, serverController.getServers);
router.get("/:id", verifyToken, serverController.getServerById);
router.post("/", verifyToken, serverController.addServer);
router.patch("/:id", verifyToken, serverController.updateServer);
router.delete("/:id", verifyToken, serverController.deleteServer);
module.exports = router;
