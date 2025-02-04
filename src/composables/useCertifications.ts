import { ref, computed } from "vue";

export interface Certification {
  id: string;
  title: string;
  platform: string;
  type: "Technical" | "Non-Technical"; // New type field
  skills: string[];
  image: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  verificationUrl: string;
}

export function useCertifications() {
  const certifications = ref<Certification[]>([
    {
      id: "CKA",
      title: "Certified Kubernetes Administrator",
      platform: "The Linux Foundation",
      type: "Technical",
      skills: [
        "Kubernetes",
        "Docker",
        "Container Orchestration",
        "Cloud Native",
      ],
      image: "/certifications/CKA.png",
      issueDate: "2024-11-13",
      expiryDate: "2026-11-13",
      credentialId: "LF-u1wvz7sxq4",
      verificationUrl:
        "https://training.linuxfoundation.org/certification/verify",
    },
    {
      id: "Devops",
      title: "Certified DevOps Foundation",
      platform: "CCSD Council Europe",
      type: "Technical",
      skills: ["DevOps", "CI/CD", "Automation", "Cloud Computing"],
      image: "/certifications/Devops.png",
      issueDate: "2024-09-24",
      expiryDate: "-",
      credentialId: "3e59299",
      verificationUrl: "https://ccsd.org/verify",
    },
  ]);

  const stats = computed(() => {
    const allCerts = certifications.value;
    const technicalCerts = allCerts.filter((cert) => cert.type === "Technical");
    const nonTechnicalCerts = allCerts.filter(
      (cert) => cert.type === "Non-Technical"
    );
    const latestCert = [...allCerts].sort(
      (a, b) =>
        new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
    )[0];

    return {
      total: allCerts.length,
      technical: technicalCerts.length,
      nonTechnical: nonTechnicalCerts.length,
      latest: latestCert?.title || "None",
    };
  });

  const DEFAULT_IMAGE = "/images/default.png";

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.src = DEFAULT_IMAGE;
  };

  return {
    certifications,
    stats,
    DEFAULT_IMAGE,
    handleImageError,
  };
}
