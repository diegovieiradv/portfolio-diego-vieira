import type { Certification } from "@/types/certification";

export type CertificateResource =
  | { kind: "image"; url: string; local: boolean }
  | { kind: "pdf"; url: string; local: boolean }
  | { kind: "external"; url: string; local: false };

const isLocal = (url: string) => url.startsWith("/");

export function getCertificateResource(
  certification: Certification
): CertificateResource | null {
  if (certification.certificateImage) {
    return {
      kind: "image",
      url: certification.certificateImage,
      local: isLocal(certification.certificateImage),
    };
  }

  if (certification.certificatePdf) {
    return {
      kind: "pdf",
      url: certification.certificatePdf,
      local: isLocal(certification.certificatePdf),
    };
  }

  if (certification.credentialUrl) {
    return { kind: "external", url: certification.credentialUrl, local: false };
  }

  return null;
}

export function hasCertificateResource(certification: Certification): boolean {
  return getCertificateResource(certification) !== null;
}
