// src/components/projects/ProjectDetails.jsx
import { CalendarDays, Clock, Tag } from 'lucide-react';

export default function ProjectDetails({ project }) {
  return (
    <div data-aos="fade-up" className="mb-12 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        نبذة عن المشروع
      </h2>
      
      <p className="text-body-color dark:text-body-color-dark mb-8 leading-relaxed">
        {project.description}
      </p>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex flex-col rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
          <span className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">تاريخ الإنجاز</span>
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <CalendarDays className="h-5 w-5 text-purple-500" />
            <span className="font-medium">{project.completionDate}</span>
          </div>
        </div>
        
        <div className="flex flex-col rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
          <span className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">مدة الإنجاز</span>
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <Clock className="h-5 w-5 text-purple-500" />
            <span className="font-medium">{project.duration}</span>
          </div>
        </div>
        
        <div className="flex flex-col rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
          <span className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">نوع المشروع</span>
          <div className="flex items-center gap-2 text-gray-900 dark:text-white">
            <Tag className="h-5 w-5 text-purple-500" />
            <span className="font-medium">{project.projectType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}