import type { CertificateDocument, Certification } from "@/types/certification";

export type CertificateResource = {
  id: string;
  title: string;
  kind: "image" | "pdf" | "external";
  url: string;
  local: boolean;
};

const isLocal = (url: string) => url.startsWith("/");

function resolveDocument(
  certification: Certification,
  document: CertificateDocument
): CertificateResource | null {
  if (document.image) {
    return {
      id: document.id,
      title: document.title,
      kind: "image",
      url: document.image,
      local: isLocal(document.image),
    };
  }

  if (document.pdf) {
    return {
      id: document.id,
      title: document.title,
      kind: "pdf",
      url: document.pdf,
      local: isLocal(document.pdf),
    };
  }

  if (document.credentialUrl) {
    return {
      id: document.id,
      title: document.title,
      kind: "external",
      url: document.credentialUrl,
      local: false,
    };
  }

  return null;
}

function resolveLegacy(certification: Certification): CertificateResource | null {
  if (certification.certificateImage) {
    return {
      id: certification.id,
      title: certification.title,
      kind: "image",
      url: certification.certificateImage,
      local: isLocal(certification.certificateImage),
    };
  }

  if (certification.certificatePdf) {
    return {
      id: certification.id,
      title: certification.title,
      kind: "pdf",
      url: certification.certificatePdf,
      local: isLocal(certification.certificatePdf),
    };
  }

  if (certification.credentialUrl) {
    return {
      id: certification.id,
      title: certification.title,
      kind: "external",
      url: certification.credentialUrl,
      local: false,
    };
  }

  return null;
}

export function getCertificateResources(certification: Certification): CertificateResource[] {
  if (certification.certificates && certification.certificates.length > 0) {
    return certification.certificates
      .map((document) => resolveDocument(certification, document))
      .filter((resource): resource is CertificateResource => resource !== null);
  }

  const legacy = resolveLegacy(certification);
  return legacy ? [legacy] : [];
}

export function getCertificateResource(
  certification: Certification
): CertificateResource | null {
  return getCertificateResources(certification)[0] ?? null;
}

export function hasCertificateResource(certification: Certification): boolean {
  return getCertificateResources(certification).length > 0;
}