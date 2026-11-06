const https = require("https");
function rpc(url, method, params) {
  const payload = JSON.stringify({ jsonrpc: "2.0", id: 1, method, params });
  return new Promise((resolve) => {
    const u = new URL(url);
    const req = https.request({ hostname: u.hostname, path: u.pathname || "/", method: "POST", headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) }, timeout: 25000 }, (res) => {
      let data = ""; res.on("data", (c) => data += c); res.on("end", () => resolve(data));
    });
    req.on("error", (e) => resolve(String(e)));
    req.write(payload); req.end();
  });
}
(async () => {
  const cases = [
    [{ fromBlock: "0x0", toBlock: "latest" }],
    [{ fromBlock: "0x1bf0000", toBlock: "0x1bf0319" }],
    [{ fromBlock: "0x1bf0310", toBlock: "0x1bf0319", address: "0x0000000000000000000000000000000000000000" }],
  ];
  for (const p of cases) {
    console.log("MAIN", JSON.stringify(p), await rpc("https://rpc.botchain.ai", "eth_getLogs", p));
  }
  const cases2 = [
    [{ fromBlock: "0x0", toBlock: "latest" }],
    [{ fromBlock: "0x1c18de0", toBlock: "0x1c18ded" }],
  ];
  for (const p of cases2) {
    console.log("TEST", JSON.stringify(p), await rpc("https://rpc.bohr.life", "eth_getLogs", p));
  }
})();
