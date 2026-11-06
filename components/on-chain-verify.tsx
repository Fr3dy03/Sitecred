'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import { verificationChecks } from '@/lib/site-data';

const REGISTRY_ADDRESS = process.env.NEXT_PUBLIC_REGISTRY_ADDRESS || '';
const RPC_URL = process.env.NEXT_PUBLIC_BOT_CHAIN_RPC || 'https://rpc.bohr.life';
const CHAIN_ID = Number(process.env.NEXT_PUBLIC_BOT_CHAIN_CHAIN_ID || 968);

const REGISTRY_ABI = [
  'function getCredential(bytes32) view returns (bytes32 credentialId, bytes32 facilityId, bytes32 credentialType, bytes32 standardId, bytes32 scopeHash, address issuer, bytes32 evidenceDigest, uint64 issuedAt, uint64 validFrom, uint64 validUntil, uint32 revision, bytes32 supersedesCredentialId, uint8 status)',
  'function isCredentialCurrent(bytes32) view returns (bool)',
];

const STATUS_LABELS = ['Not found', 'Issued', 'Suspended', 'Revoked', 'Superseded'];
const STATUS_COLORS = ['bg-site-muted', 'bg-site-green', 'bg-amber-500', 'bg-red-500', 'bg-site-blue'];

export function OnChainVerify() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | {
    statusIndex: number;
    current: boolean;
    facilityId: string;
    issuedAt: number;
    validFrom: number;
    validUntil: number;
    revision: number;
    issuer: string;
  }>(null);

  async function verify() {
    const value = input.trim();
    if (!value) return;
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      let credentialId: string;
      if (/^0x[0-9a-f]{64}$/i.test(value)) {
        credentialId = value;
      } else {
        credentialId = ethers.id(value);
      }

      const provider = new ethers.JsonRpcProvider(RPC_URL, CHAIN_ID);
      const registry = new ethers.Contract(REGISTRY_ADDRESS, REGISTRY_ABI, provider);

      const credential = await registry.getCredential(credentialId);
      if (credential.credentialId === ethers.ZeroHash) {
        setError('Credential not found on-chain (issuedAt is 0). Check the reference and try again.');
        return;
      }
      const current = await registry.isCredentialCurrent(credentialId);
      setResult({
        statusIndex: Number(credential.status),
        current,
        facilityId: credential.facilityId,
        issuedAt: Number(credential.issuedAt),
        validFrom: Number(credential.validFrom),
        validUntil: Number(credential.validUntil),
        revision: Number(credential.revision),
        issuer: credential.issuer,
      });
    } catch (e) {
      setError(e instanceof Error ? `Verification failed: ${e.message.split('(')[0]}` : 'Verification failed.');
    } finally {
      setLoading(false);
    }
  }

  if (!REGISTRY_ADDRESS) {
    return (
      <div className="card">
        <div className="mb-4 text-sm uppercase tracking-[0.18em] text-site-muted">Live verification (BOT Chain testnet)</div>
        <p className="text-site-muted">Registry address not configured. Set NEXT_PUBLIC_REGISTRY_ADDRESS to enable on-chain checks.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="mb-4 text-sm uppercase tracking-[0.18em] text-site-muted">
        Live verification · BOT Chain testnet (chain {CHAIN_ID})
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          className="w-full rounded-2xl border border-site-border bg-site-background px-4 py-3 text-site-text"
          placeholder="Credential ID (0x… 32-byte hex, or the exact ID seed string)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && verify()}
        />
        <button className="btn-primary" onClick={verify} disabled={loading}>
          {loading ? 'Verifying…' : 'Verify'}
        </button>
      </div>
      <p className="mt-2 text-xs text-site-muted">
        Reads the SiteCredentialRegistry directly at {REGISTRY_ADDRESS}.
      </p>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-sm text-red-700">{error}</div>
      )}

      {result && (
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-white ${STATUS_COLORS[result.statusIndex]}`}>
              <span className="mt-0.5 h-2 w-2 rounded-full bg-white/70" />
              {STATUS_LABELS[result.statusIndex]}
            </span>
            <span className={`text-sm font-medium ${result.current ? 'text-site-green' : 'text-site-muted'}`}>
              {result.current ? 'Credential is current ✓' : 'Credential is not current'}
            </span>
          </div>
          <dl className="grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            <div className="flex justify-between gap-4 border-b border-site-border py-1">
              <dt className="text-site-muted">Facility</dt>
              <dd className="font-mono text-xs text-site-text">{result.facilityId.slice(0, 10)}…{result.facilityId.slice(-6)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-site-border py-1">
              <dt className="text-site-muted">Issuer</dt>
              <dd className="font-mono text-xs text-site-text">{result.issuer}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-site-border py-1">
              <dt className="text-site-muted">Issued at</dt>
              <dd className="text-site-text">{new Date(result.issuedAt * 1000).toISOString().slice(0, 16).replace('T', ' ')} UTC</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-site-border py-1">
              <dt className="text-site-muted">Valid from</dt>
              <dd className="text-site-text">{new Date(result.validFrom * 1000).toISOString().slice(0, 10)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-site-border py-1">
              <dt className="text-site-muted">Valid until</dt>
              <dd className="text-site-text">{new Date(result.validUntil * 1000).toISOString().slice(0, 10)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-site-border py-1">
              <dt className="text-site-muted">Revision</dt>
              <dd className="text-site-text">{result.revision}</dd>
            </div>
          </dl>
        </div>
      )}

      <div className="mt-6 border-t border-site-border pt-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-site-muted">Verification checklist</h3>
        <ul className="mt-3 space-y-2 text-sm text-site-muted">
          {verificationChecks.map((check) => (
            <li key={check} className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-site-green" /> {check}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
