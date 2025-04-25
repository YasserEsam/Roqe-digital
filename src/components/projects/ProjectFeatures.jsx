// src/components/projects/ProjectFeatures.jsx
import { CheckCircle } from 'lucide-react';

export default function ProjectFeatures({ features }) {
  if (!features || features.length === 0) return null;
  
  return (
    <div data-aos="fade-up" data-aos-delay="100" className="mb-12 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        مميزات المشروع
      </h2>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3"
          >
            <div className="shrink-0">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-body-color dark:text-body-color-dark font-medium">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}