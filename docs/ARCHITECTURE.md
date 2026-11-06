# Architecture

SiteCred is split into four major layers: marketing, authenticated operations, blockchain verification and evidence storage. The product uses a Next.js frontend, a backend service layer for data and policies, a Solidity registry for lifecycle proof, and an evidence store for private facility records.

## Overview
- Frontend: Next.js + TypeScript + Tailwind
- Backend: API services with PostgreSQL and Redis
- Blockchain: BOT Chain registry and verification client
- Evidence: encrypted object storage and signed URLs
