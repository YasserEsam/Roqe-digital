// src/components/projects/RelatedProjects.jsx
import ProjectCard from "./ProjectCard";

export default function RelatedProjects({ projects }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div data-aos="fade-up" className="mt-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          مشاريع ذات صلة
        </h2>
        <p className="text-body-color dark:text-body-color-dark mt-2">
          اكتشف المزيد من مشاريعنا المشابهة
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
