// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";

contract SiteCredentialRegistry is AccessControl, Pausable {
    bytes32 public constant ISSUER_ADMIN_ROLE = keccak256("ISSUER_ADMIN_ROLE");
    bytes32 public constant ISSUER_ROLE = keccak256("ISSUER_ROLE");
    bytes32 public constant FACILITY_OPERATOR_ROLE = keccak256("FACILITY_OPERATOR_ROLE");

    enum CredentialStatus { None, Issued, Suspended, Revoked, Superseded }

    struct Facility {
        bytes32 facilityId;
        address operator;
        bytes32 regionCodeHash;
        uint64 createdAt;
        bool active;
    }

    struct Credential {
        bytes32 credentialId;
        bytes32 facilityId;
        bytes32 credentialType;
        bytes32 standardId;
        bytes32 scopeHash;
        address issuer;
        bytes32 evidenceDigest;
        uint64 issuedAt;
        uint64 validFrom;
        uint64 validUntil;
        uint32 revision;
        bytes32 supersedesCredentialId;
        CredentialStatus status;
    }

    mapping(bytes32 => Facility) private facilities;
    mapping(bytes32 => Credential) private credentials;
    mapping(address => bool) private issuerAuthorised;

    event FacilityRegistered(bytes32 indexed facilityId, address indexed operator);
    event IssuerApproved(address indexed issuer);
    event IssuerRevoked(address indexed issuer);
    event CredentialIssued(bytes32 indexed credentialId, bytes32 indexed facilityId);
    event CredentialRenewed(bytes32 indexed credentialId, uint64 validUntil);
    event CredentialSuspended(bytes32 indexed credentialId);
    event CredentialRevoked(bytes32 indexed credentialId);
    event CredentialSuperseded(bytes32 indexed credentialId, bytes32 indexed supersededCredentialId);

    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ISSUER_ADMIN_ROLE, msg.sender);
    }

    function registerFacility(bytes32 facilityId, bytes32 regionCodeHash) external whenNotPaused {
        require(facilities[facilityId].createdAt == 0, "facility exists");
        require(hasRole(FACILITY_OPERATOR_ROLE, msg.sender) || hasRole(DEFAULT_ADMIN_ROLE, msg.sender), "not allowed");
        facilities[facilityId] = Facility({
            facilityId: facilityId,
            operator: msg.sender,
            regionCodeHash: regionCodeHash,
            createdAt: uint64(block.timestamp),
            active: true
        });
        emit FacilityRegistered(facilityId, msg.sender);
    }

    function updateFacilityOperator(bytes32 facilityId, address newOperator) external onlyRole(ISSUER_ADMIN_ROLE) {
        require(facilities[facilityId].createdAt != 0, "facility missing");
        facilities[facilityId].operator = newOperator;
    }

    function approveIssuer(address issuer) external onlyRole(ISSUER_ADMIN_ROLE) {
        require(!issuerAuthorised[issuer], "already approved");
        issuerAuthorised[issuer] = true;
        grantRole(ISSUER_ROLE, issuer);
        emit IssuerApproved(issuer);
    }

    function revokeIssuer(address issuer) external onlyRole(ISSUER_ADMIN_ROLE) {
        issuerAuthorised[issuer] = false;
        revokeRole(ISSUER_ROLE, issuer);
        emit IssuerRevoked(issuer);
    }

    function issueCredential(
        bytes32 credentialId,
        bytes32 facilityId,
        bytes32 credentialType,
        bytes32 standardId,
        bytes32 scopeHash,
        bytes32 evidenceDigest,
        uint64 validFrom,
        uint64 validUntil,
        uint32 revision
    ) external whenNotPaused onlyRole(ISSUER_ROLE) {
        require(facilities[facilityId].createdAt != 0, "facility missing");
        require(credentials[credentialId].issuedAt == 0, "duplicate id");
        require(validUntil > validFrom, "invalid validity");

        credentials[credentialId] = Credential({
            credentialId: credentialId,
            facilityId: facilityId,
            credentialType: credentialType,
            standardId: standardId,
            scopeHash: scopeHash,
            issuer: msg.sender,
            evidenceDigest: evidenceDigest,
            issuedAt: uint64(block.timestamp),
            validFrom: validFrom,
            validUntil: validUntil,
            revision: revision,
            supersedesCredentialId: bytes32(0),
            status: CredentialStatus.Issued
        });

        emit CredentialIssued(credentialId, facilityId);
    }

    function renewCredential(bytes32 credentialId, uint64 validUntil) external whenNotPaused onlyRole(ISSUER_ROLE) {
        Credential storage credential = credentials[credentialId];
        require(credential.issuedAt != 0, "missing credential");
        require(validUntil > credential.validFrom, "invalid validity");
        credential.validUntil = validUntil;
        emit CredentialRenewed(credentialId, validUntil);
    }

    function suspendCredential(bytes32 credentialId) external whenNotPaused onlyRole(ISSUER_ROLE) {
        Credential storage credential = credentials[credentialId];
        require(credential.issuedAt != 0, "missing credential");
        credential.status = CredentialStatus.Suspended;
        emit CredentialSuspended(credentialId);
    }

    function revokeCredential(bytes32 credentialId) external whenNotPaused onlyRole(ISSUER_ROLE) {
        Credential storage credential = credentials[credentialId];
        require(credential.issuedAt != 0, "missing credential");
        credential.status = CredentialStatus.Revoked;
        emit CredentialRevoked(credentialId);
    }

    function supersedeCredential(bytes32 currentCredentialId, bytes32 newCredentialId) external whenNotPaused onlyRole(ISSUER_ROLE) {
        Credential storage current = credentials[currentCredentialId];
        require(current.issuedAt != 0, "missing credential");
        current.status = CredentialStatus.Superseded;
        current.supersedesCredentialId = newCredentialId;
        emit CredentialSuperseded(currentCredentialId, newCredentialId);
    }

    function getFacility(bytes32 facilityId) external view returns (Facility memory) {
        return facilities[facilityId];
    }

    function getCredential(bytes32 credentialId) external view returns (Credential memory) {
        return credentials[credentialId];
    }

    function isIssuerApproved(address issuer) external view returns (bool) {
        return issuerAuthorised[issuer];
    }

    function isCredentialCurrent(bytes32 credentialId) external view returns (bool) {
        Credential memory credential = credentials[credentialId];
        return credential.issuedAt != 0 && credential.status == CredentialStatus.Issued && block.timestamp >= credential.validFrom && block.timestamp <= credential.validUntil;
    }

    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _pause();
    }

    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) {
        _unpause();
    }
}
