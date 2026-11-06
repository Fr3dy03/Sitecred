# BOT Chain Testnet Deployment

## Deployment record — 2026-11-06

| Item | Value |
|---|---|
| Network | BOT Chain testnet (`bot_testnet`) |
| Chain ID | 968 |
| RPC | `https://rpc.bohr.life` (do **not** use `rpc.botchain.ai` — that is chain 677) |
| Registry contract | `0xadbb677E0C91E2DB2611947Be99BDC83DE02a7e6` |
| Deploy tx | `0x3a53105d058005ce6eebc5856e34e85dba2d0f98660627b437ddb63b2707d499` |
| Deployer / default admin & ISSUER_ADMIN | `0x653404061D3579579Bd4C21b794a6E3737Cdac99` |
| Deploy cost | ~1,426,421 gas at 20 gwei (~0.029 BOHR) |
| Code | `contracts/SiteCredentialRegistry.sol`, Solidity 0.8.24, optimizer 200 runs |

The `.env` carries `NEXT_PUBLIC_REGISTRY_ADDRESS` for the frontend and `BOTCHAIN_PRIVATE_KEY` for deployments (gitignored).

## On-chain end-to-end test (scripts/smoke-test-testnet.cjs) — PASSED

Full lifecycle executed on-chain with state read-back verification:

| Step | Tx | Result |
|---|---|---|
| registerFacility | `0x1de2bfd5…eb6ccd` | facility active |
| approveIssuer | `0x93b357a5…983b519` | issuer approved |
| issueCredential | `0x30f966ba…edab4776` | status 1 = Issued |
| renewCredential (+30d) | `0xd823e2e3…871b` | renewed |
| isCredentialCurrent | (read) | `true` |
| suspendCredential | `0x24da664d…96177` | status 2, isCurrent `false` |
| supersedeCredential | `0x0ffb3443…b8369e` | status 4 = Superseded, supersedes link set |

## Demo data for UI verification (scripts/demo-data.cjs)

- Credential seed (type this in the UI): `demo-credential-001`
- Credential bytes32: `0x1f3e1b6938a5aa8da2f1cdd458aab76a9277f9857c73c41d44176f087edcde8a`
- Facility bytes32: `0xaac9123c735f9a5fa49eeed17029e0483771ade7c8799ad75e853a2c8bfba9cd`
- Status: **Issued / current**, valid 30 days from issue

## Frontend wiring

`components/on-chain-verify.tsx` reads the registry directly from the browser:
- Public page: `/verification`
- App page: `/app/verification`
- Accepts either a raw 32-byte hex ID or the seed string (hashed with keccak256 client-side).

## How to redeploy / retest

```bash
npm run contracts:deploy:testnet     # deploy
node scripts/smoke-test-testnet.cjs  # lifecycle test (needs NEXT_PUBLIC_REGISTRY_ADDRESS)
node scripts/demo-data.cjs           # demo credential for the UI
npm run dev                          # UI on http://localhost:3000/verification
```

## Known gaps (product, not deployment)

- Dashboard data is static mock data (`lib/site-data.ts`); only the two verification pages read the chain.
- `/app/facilities/new` wizard is a visual placeholder (no real form submission, no on-chain registration from the UI yet).
- No block explorer confirmed for BOT testnet; verify transactions via RPC (`eth_getTransactionReceipt`).
