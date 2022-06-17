const domainModel = require("../../../database/models").Domain;
const domain_helper = require("../../../helpers/domain_helper");

const addDomain = async (req, res) => {
  try {
    let payload = await domain_helper.whois(req.body.domain_name);
    req.body = { ...req.body, ...payload };
    const domain = await domainModel.create(req.body);
    res.status(201).send(domain);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getDomains = async (req, res) => {
  try {
    let domains = await domainModel.findAll();
    res.status(200).send(domains);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//return only one domain based on given "ID"
const getdomainById = async (req, res) => {
  try {
    let domain = await domainModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!domain) res.status(404).send("Domain with given id is not found!");
    else res.status(200).send(domain);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update domain in domain table
const updateDomain = async (req, res) => {
  //check if domain exist
  try {
    let domain = await domainModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!domain) {
      res.status(404).send("Domain with given id is not found!");
      return;
    }
    let domain_name = req.body.domain_name ? req.body.domain_name : domain.domain_name
    let payload = await domain_helper.whois(domain_name);
    req.body = { ...req.body, ...payload };
    await domainModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(201).send("Domain updated");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete domain from user table
const deleteDomain = async (req, res) => {
  //check if domain exist
  let domain = await domainModel.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!domain) {
    res.status(404).send("Domain with given id is not found!");
    return;
  }
  await domainModel.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send("domain deleted");
};

module.exports = {
  addDomain,
  getDomains,
  getdomainById,
  updateDomain,
  deleteDomain,
};
