# SiteCred

SiteCred is a facility assurance passport and verification platform for distributed infrastructure and enterprise operations.

## Features
- Public marketing site and authenticated product application
- Facility registration and evidence-aware workflows
- Public verification and lifecycle management
- BOT Chain branding and integration planning
- Solidity registry contract and research docs

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## BOT Chain testnet deployment

The project includes a Hardhat deployment setup for the BOT Chain testnet (chain ID 968).

1. Copy the environment template and configure the deployment wallet:

```bash
cp .env.example .env
```

2. Set `BOTCHAIN_PRIVATE_KEY` to a funded wallet on BOT Chain testnet and confirm `BOTCHAIN_TESTNET_RPC_URL` points to the desired RPC endpoint.
3. Compile the contract and deploy to the testnet:

```bash
npm run contracts:compile
npm run contracts:deploy:testnet
```

4. Record the contract address returned by the deployment script and set `NEXT_PUBLIC_REGISTRY_ADDRESS` in the app environment if you want the frontend to talk to the deployed registry.

The deployment script is `scripts/deploy-sitecred.cjs` (the project uses ESM, so scripts are `.cjs`).

## Deploying to Vercel

This is a standard Next.js 14 project — Vercel auto-detects it. After pushing to GitHub, import the repo at https://vercel.com/new and set these environment variables in the Vercel project settings:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_APP_NAME` | `SiteCred` |
| `NEXT_PUBLIC_SITE_URL` | your Vercel URL (e.g. `https://sitecred.vercel.app`) |
| `NEXT_PUBLIC_BOT_CHAIN_RPC` | `https://rpc.bohr.life` |
| `NEXT_PUBLIC_BOT_CHAIN_CHAIN_ID` | `968` |
| `NEXT_PUBLIC_REGISTRY_ADDRESS` | `0xadbb677E0C91E2DB2611947Be99BDC83DE02a7e6` |

The `BOTCHAIN_*` variables are only needed for contract deployment from a local machine — they are not required on Vercel. The live on-chain verification on `/verification` and `/app/verification` will work as soon as `NEXT_PUBLIC_REGISTRY_ADDRESS` is set.

## Testnet deployment record

Deployed 2026-11-06 — see `docs/DEPLOYMENT.md`. Registry: `0xadbb677E0C91E2DB2611947Be99BDC83DE02a7e6` (chain 968, RPC `https://rpc.bohr.life`). The public and app verification pages read this contract live via `NEXT_PUBLIC_REGISTRY_ADDRESS`.
