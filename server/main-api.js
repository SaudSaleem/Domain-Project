const express = require("express");
const router = express.Router();

const domainRoute = require("./api/domain/routes");
const serverRoute = require("./api/server/routes");
//const resourceRoute = require("./api/server/route");

// default route to make sure , it works.
router.get("/", function (req, res) {
    res.status(200).json({
      success: true,
      status: 200,
      message: "Welcome to Domain system backend api!",
      data: {},
    });
  });

  router.use("/api/domain", domainRoute); 
  router.use("/api/server", serverRoute);

  module.exports = router;
