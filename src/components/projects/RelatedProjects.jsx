// src/components/projects/RelatedProjects.jsx
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

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
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`}
            className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-800"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <span className="mb-2 inline-block text-sm font-medium text-purple-600 dark:text-purple-400">
                {project.category}
              </span>
              
              <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                {project.title}
              </h3>
              
              <p className="text-body-color dark:text-body-color-dark mb-4 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
                مشاهدة التفاصيل
                <ChevronLeft className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}