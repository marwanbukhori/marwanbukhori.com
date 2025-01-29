import { ref, computed } from 'vue'
import contactData from '@/data/contact.json'
import projectsData from '@/data/projects.json'
import certificationsData from '@/data/certifications.json'

export function usePortfolioData() {
  console.log('Loading certifications data:', certificationsData);

  const contact = ref(contactData)
  const projects = ref(projectsData)
  const certifications = ref(certificationsData)

  // Projects statistics
  const projectStats = computed(() => {
    const allProjects = projects.value.projects
    return {
      total: allProjects.length,
      featured: allProjects.filter(p => p.featured).length,
      technologies: [...new Set(allProjects.flatMap(p => p.technologies))].length,
      categories: [...new Set(allProjects.map(p => p.category))].length
    }
  })

  // Certification statistics
  const certificationStats = computed(() => {
    console.log('Computing certification stats:', certifications.value);
    const allCertifications = certifications.value.certifications
    return {
      total: allCertifications.length,
      platforms: [...new Set(allCertifications.map(c => c.platform))].length,
      skills: [...new Set(allCertifications.flatMap(c => c.skills))].length,
      active: allCertifications.filter(c => {
        const expiry = new Date(c.expiryDate)
        return expiry > new Date()
      }).length
    }
  })

  // Get unique technologies across all projects
  const uniqueTechnologies = computed(() =>
    [...new Set(projects.value.projects.flatMap(p => p.technologies))]
  )

  // Get unique skills across all certifications
  const uniqueSkills = computed(() =>
    [...new Set(certifications.value.certifications.flatMap(c => c.skills))]
  )

  // Filter projects by category
  const filterProjectsByCategory = (category: string) => {
    return projects.value.projects.filter(p => p.category === category)
  }

  // Filter certifications by platform
  const filterCertificationsByPlatform = (platform: string) => {
    return certifications.value.certifications.filter(c => c.platform === platform)
  }

  return {
    contact,
    projects,
    certifications,
    projectStats,
    certificationStats,
    uniqueTechnologies,
    uniqueSkills,
    filterProjectsByCategory,
    filterCertificationsByPlatform
  }
}
