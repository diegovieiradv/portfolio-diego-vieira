export type CertificationStatus = "concluída" | "em andamento";

export type Certification = {
  title: string;
  institution: string;
  date: string;
  status: CertificationStatus;
  skills: string[];
  image?: string;
  link?: string;
};
