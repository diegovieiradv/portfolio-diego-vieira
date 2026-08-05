export type CourseStatus = "completed" | "in-progress";

export type CertificateStatus = "available" | "pending" | "not-applicable";

export type CertificationCategory =
  "certificação" | "formação" | "curso" | "imersão" | "programa" | "graduação";

export type Certification = {
  id: string;
  title: string;
  institution?: string;
  category: CertificationCategory;
  area: string;
  courseStatus?: CourseStatus;
  certificateStatus?: CertificateStatus;
  description?: string;
  instructor?: string;
  duration?: string;
  skills?: string[];
  date?: string | null;
  credentialUrl?: string | null;
  certificateImage?: string | null;
  certificatePdf?: string | null;
  image?: string | null;
  featured?: boolean;
};
