// src/app/projects/[id]/page.jsx
import { notFound } from 'next/navigation';
import projects from '@/components/projects/projectData';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectDetails from '@/components/projects/ProjectDetails';
import ProjectGallery from '@/components/projects/ProjectGallery';
import ProjectFeatures from '@/components/projects/ProjectFeatures';
import ProjectChallenges from '@/components/projects/ProjectChallenges';
import ProjectTechnologies from '@/components/projects/ProjectTechnologies';
import ProjectTechStack from '@/components/projects/ProjectTechStack';
import RelatedProjects from '@/components/projects/RelatedProjects';
import CodeRepository from '@/components/projects/CodeRepository';
import { BackgroundSvgs } from '@/components/projects/BackgroundSvgs';

// ✅ Improve static path generation
export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

// ✅ SEO-optimized metadata
export async function generateMetadata({ params }) {
  const { id } = await params
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    return {
      title: 'مشروع غير موجود',
      description: 'عذراً، المشروع المطلوب غير موجود.',
      alternates: {
        canonical: '/projects'
      }
    };
  }

  const fullSiteURL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const images = project.images.map(img => ({
    url: img.startsWith('/') ? `${fullSiteURL}${img}` : img,
    width: 1200,
    height: 630,
    alt: project.title,
  }));


  return {
    title: `${project.title} | أعمالنا المميزة`,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.id}`
    },
    openGraph: {
      title: `${project.title} | أعمالنا المميزة`,
      description: project.description,
      url: `/projects/${project.id}`,
      type: 'website',
      images: images.length ? images : [{
        url: `${fullSiteURL}/default-image.jpg`,
        width: 1200,
        height: 630,
        alt: project.title,
      }],
      locale: 'ar_AR',
      siteName: 'رقي',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | أعمالنا المميزة`,
      description: project.description,
      images: images.length ? images[0] : `${fullSiteURL}/default-image.jpg`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      }
    }
  };
}

// ✅ Page component
export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find(p => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project, projects);

  return (
    <div className="relative dark:bg-gray-dark overflow-hidden bg-gray-50 pt-16 pb-10 md:pb-16">
      <BackgroundSvgs />
      <ProjectHero project={project} />

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProjectDetails project={project} />
            <ProjectFeatures features={project.projectFeatures} />
            <ProjectChallenges challenges={project.challenges} />
            <ProjectGallery images={project.images} title={project.title} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProjectTechnologies tags={project.tags} />
              <ProjectTechStack techStack={project.techStack} />
              <CodeRepository 
                codeLink={project.link} 
                liveLink={project.liveLink}
                completionDate={project.completionDate}
                duration={project.duration}
                projectType={project.projectType}
              />
            </div>
          </div>
        </div>

        <RelatedProjects projects={relatedProjects} />
      </div>
    </div>
  );
}

// ✅ Helper function outside render to prevent re-creation
function getRelatedProjects(currentProject, allProjects) {
  return allProjects
    .filter(p => 
      p.id !== currentProject.id && 
      (p.category === currentProject.category || 
       p.tags.some(tag => currentProject.tags.includes(tag)))
    )
    .slice(0, 3);
}
