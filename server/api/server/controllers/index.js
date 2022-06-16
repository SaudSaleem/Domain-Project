const serverModel = require("../../../database/models").Server;
const server_helper = require("../../../helpers/server_helper");
const { spawn } = require("child_process");

const addServer = async (req, res) => {
  try {
     const IPv4 = await server_helper.dig(req.body.server_name,'A');
     const IPv6 = await server_helper.dig(req.body.server_name,'AAAA');
     let payload = {
        IPv4,IPv6
     }
     req.body = { ...req.body, ...payload };
    const server = await serverModel.create(req.body);
    console.log(123,server.type)
    res.status(201).send(server);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getServers = async (req, res) => {
  try {
    let domains = await serverModel.findAll();
    res.status(200).send(domains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//return only one server based on given "ID"
const getServerById = async (req, res) => {
  try {
    let server = await serverModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!server) res.status(404).send("Server with given id is not found!");
    else res.status(200).send(server);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update server in server table
const updateServer = async (req, res) => {
  //check if server exist
  try {
    let server = await serverModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!server) {
      res.status(404).send("Server with given id is not found!");
      return;
    }
    const serverName = req.body.server_name ? req.body.server_name : server.server_name
    const IPv4 = await server_helper.dig(serverName,'A');
    const IPv6 = await server_helper.dig(serverName,'AAAA');
    const payload = {
       IPv4,IPv6
    }
    req.body = { ...req.body, ...payload };
    await serverModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).send("Server updated");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete server from user table
const deleteServer = async (req, res) => {
  //check if server exist
  let server = await serverModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!server) {
    res.status(404).send("Server with given id is not found!");
    return;
  }
  await serverModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send("server deleted");
};

module.exports = {
  addServer,
  getServers,
  getServerById,
  updateServer,
  deleteServer,
};
