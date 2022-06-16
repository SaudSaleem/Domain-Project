const express = require("express");
const router = express.Router();

const serverController = require("../controllers");

router.get("/",serverController.getServers);
router.get("/:id",serverController.getServerById);
router.post("/",serverController.addServer);
router.patch("/:id",serverController.updateServer);
router.delete("/:id",serverController.deleteServer);
module.exports = router;
