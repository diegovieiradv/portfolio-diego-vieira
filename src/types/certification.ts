export type CertificationStatus = "concluída" | "em andamento";

export type CertificationCategory =
  "certificação" | "formação" | "curso" | "imersão" | "programa" | "graduação";

export type Certification = {
  id: string;
  title: string;
  institution?: string;
  category: CertificationCategory;
  area: string;
  status?: CertificationStatus;
  description?: string;
  instructor?: string;
  duration?: string;
  skills?: string[];
  date?: string | null;
  credentialUrl?: string | null;
  image?: string | null;
  featured?: boolean;
};
