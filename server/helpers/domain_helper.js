const { spawn } = require("child_process");

const whois = (domain) => {
  return new Promise((resolve, reject) => {
    const whois = spawn("whois", [domain]);
    whois.stdout.on("data", async (data) => {
      if (domainExist(data.toString())) {
        const payload = extractDomainInfo(data.toString());
       resolve(payload)
      } else {
        reject({message:"Domain not exist"})
      }
    });
  })
}
const extractDomainInfo = (data) => {
  data = data.split(/\r?\n/);
  let object = {};
  try {
    //convert array into object
    data.forEach((item) => {
      let [key, ...value] = item.split(":");
      value = value.toString().trim().replace(/,/g, ":");
      if (key && value) {
        object[key.trim()] = value.toString().trim();
      }
    });

     object = {
      registration_date: new Date(object["Creation Date"]),
      updated_date: new Date(object["Updated Date"]),
      expiry_date: new Date(object["Registrar Registration Expiration Date"]),
    };
  } catch (e) {
    console.log("Error occur during extraction of data", e);
  }

  return object;
};
const domainExist = (domain) => {
 return  domain.includes('No match for domain') ? false : true
}
module.exports = {
  whois, extractDomainInfo,domainExist
};
