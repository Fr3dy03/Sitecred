# Research

## BOT Chain validation
Official network configuration is reviewed in the project documentation: mainnet chain ID 677, testnet chain ID 968. The RPC endpoints are `https://rpc.botchain.ai` and `https://rpc.bohr.life`. The public mainnet endpoint explicitly disables unrestricted `eth_getLogs`. This impacts how historical indexing is designed and requires PostgreSQL receipts and direct current-state reads.

## Security and architecture
SiteCred prioritises private evidence handling, issuer identity checks and a clear separation between on-chain proof and off-chain physical assessment.
