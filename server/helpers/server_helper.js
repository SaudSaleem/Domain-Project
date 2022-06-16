const { spawn } = require("child_process");

const dig = (domain, type = "A") => {
  return new Promise((resolve, reject) => {
    const dig = spawn("dig", [type, domain]);
    dig.stdout.on("data", async (data) => {
      const payload = extractServerInfo(data.toString());
      payload.length
        ? resolve(payload)
        : reject({ message: "Server not exist" });
    });
  });
};
const extractServerInfo = (data) => {
  data = data.split(/\r?\n/);
  let index = data.findIndex((item) => item.includes("ANSWER SECTION"));
  if (index < 0) {
    return [];
  }

  let ip1 = data[index + 1].replace(/\t/g, " ").split(" ");
  ip1 = ip1[ip1.length - 1];

  let ip2 = data[index + 2].replace(/\t/g, " ").split(" ");
  ip2 = ip2[ip2.length - 1];
  return [ip1, ip2].join(",");
};

module.exports = {
  dig,
  extractServerInfo,
};
