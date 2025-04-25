// src/components/projects/CodeRepository.jsx
import { Github, ExternalLink, Calendar, Clock, Tag } from 'lucide-react';

export default function CodeRepository({ codeLink, liveLink, completionDate, duration, projectType }) {
  return (
    <div data-aos="fade-up" data-aos-delay="200" className="rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        تفاصيل المشروع
      </h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-purple-500" />
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">تاريخ الإنجاز:</span>
            <p className="font-medium text-gray-900 dark:text-white">{completionDate}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-purple-500" />
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">مدة الإنجاز:</span>
            <p className="font-medium text-gray-900 dark:text-white">{duration}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-purple-500" />
          <div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">نوع المشروع:</span>
            <p className="font-medium text-gray-900 dark:text-white">{projectType}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        {codeLink && (
          <a 
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
          >
            <Github className="h-5 w-5" />
            مستودع الكود
          </a>
        )}
        
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
          >
            <ExternalLink className="h-5 w-5" />
            مشاهدة المشروع الحي
          </a>
        )}
      </div>
    </div>
  );
}