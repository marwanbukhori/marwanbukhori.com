import { ref, computed } from 'vue';

export interface Certification {
  id: string;
  title: string;
  platform: string;
  type: 'Technical' | 'Non-Technical'; // New type field
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
      id: "cka-2024",
      title: "Certified Kubernetes Administrator",
      platform: "The Linux Foundation",
      type: "Technical",
      skills: ["Kubernetes", "Docker", "Container Orchestration", "Cloud Native"],
      image: "/certifications/cka.png",
      issueDate: "2024-01-15",
      expiryDate: "2027-01-15",
      credentialId: "LF-zk89m2",
      verificationUrl: "https://training.linuxfoundation.org/certification/verify",
    },
    {
      id: "devops-2023",
      title: "Certified DevOps Foundation",
      platform: "CCSD Council Europe",
      type: "Technical",
      skills: ["DevOps", "CI/CD", "Automation", "Cloud Computing"],
      image: "/certifications/devops.png",
      issueDate: "2023-11-30",
      expiryDate: "2026-11-30",
      credentialId: "CCSD-23-1234",
      verificationUrl: "https://ccsd.org/verify",
    },
    {
      id: "flutter-2023",
      title: "Program Bimbingan Pembangunan Aplikasi Mobile Dengan Flutter",
      platform: "Taming Tech Sdn. Bhd.",
      type: "Technical",
      skills: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
      image: "/certifications/flutter.png",
      issueDate: "2023-08-15",
      expiryDate: "2026-08-15",
      credentialId: "TT-FL-2023",
      verificationUrl: "https://tamingtech.com/verify",
    }
  ]);

  const stats = computed(() => {
    const allCerts = certifications.value;
    const technicalCerts = allCerts.filter(cert => cert.type === 'Technical');
    const nonTechnicalCerts = allCerts.filter(cert => cert.type === 'Non-Technical');
    const latestCert = [...allCerts].sort(
      (a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
    )[0];

    return {
      total: allCerts.length,
      technical: technicalCerts.length,
      nonTechnical: nonTechnicalCerts.length,
      latest: latestCert?.title || 'None',
    };
  });

  const DEFAULT_IMAGE = '/images/default.png';

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
