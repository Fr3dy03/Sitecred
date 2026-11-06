import { OnChainVerify } from '@/components/on-chain-verify';

export default function AppVerificationPage() {
  return (
    <div className="card">
      <div className="eyebrow">Verification</div>
      <h1 className="mt-2 text-3xl font-semibold text-site-text">Credential verification service</h1>
      <div className="mt-6">
        <OnChainVerify />
      </div>
    </div>
  );
}
