const https = require("https");
const http = require("http");

function rpc(url, method, params) {
  const payload = JSON.stringify({ jsonrpc: "2.0", id: 1, method, params });
  return new Promise((resolve) => {
    const u = new URL(url);
    const lib = u.protocol === "https:" ? https : http;
    const req = lib.request(
      {
        hostname: u.hostname,
        path: u.pathname,
        port: u.port || (u.protocol === "https:" ? 443 : 80),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
        },
        timeout: 20000,
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve({ status: res.statusCode, data }));
      }
    );
    req.on("error", (e) => resolve({ error: String(e) }));
    req.on("timeout", () => {
      req.destroy();
      resolve({ error: "timeout" });
    });
    req.write(payload);
    req.end();
  });
}

const methods = [
  ["eth_chainId", []],
  ["net_version", []],
  ["web3_clientVersion", []],
  ["eth_blockNumber", []],
  ["eth_gasPrice", []],
  ["eth_getBlockByNumber", ["latest", false]],
  ["eth_getLogs", [{ fromBlock: "latest", toBlock: "latest" }]],
  ["eth_call", [{ to: "0x0000000000000000000000000000000000000000", data: "0x" }, "latest"]],
  ["eth_estimateGas", [{ from: "0x0000000000000000000000000000000000000001", to: "0x0000000000000000000000000000000000000001", value: "0x0" }]],
  ["eth_getTransactionReceipt", ["0x0000000000000000000000000000000000000000000000000000000000000001"]],
  ["eth_getCode", ["0x0000000000000000000000000000000000000000", "latest"]],
  ["eth_getBalance", ["0x0000000000000000000000000000000000000001", "latest"]],
  ["eth_sendRawTransaction", ["0x00"]],
];

(async () => {
  for (const url of ["https://rpc.botchain.ai", "https://rpc.bohr.life"]) {
    console.log("===== " + url + " =====");
    for (const [m, p] of methods) {
      const r = await rpc(url, m, p);
      const snippet = JSON.stringify(r).slice(0, 500);
      console.log(m + ": " + snippet);
    }
  }
})();
