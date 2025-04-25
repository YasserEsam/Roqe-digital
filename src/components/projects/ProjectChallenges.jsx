// src/components/projects/ProjectChallenges.jsx
import { Lightbulb, Zap, TrendingUp } from 'lucide-react';

export default function ProjectChallenges({ challenges }) {
  if (!challenges || challenges.length === 0) return null;
  
  return (
    <div data-aos="fade-up" data-aos-delay="200" className="mb-12 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        التحديات والحلول والنتائج
      </h2>
      
      <div className="space-y-8">
        {challenges.map((item, index) => (
          <div 
            key={index} 
            className="rounded-xl bg-gray-50 p-6 dark:bg-gray-700/50"
          >
            <div className="mb-4 flex items-start gap-4">
              <div className="rounded-lg bg-red-100 p-2 dark:bg-red-900/20">
                <Lightbulb className="h-6 w-6 text-red-500 dark:text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">التحدي</h3>
                <p className="text-body-color dark:text-body-color-dark mt-1">{item.challenge}</p>
              </div>
            </div>
            
            <div className="mb-4 flex items-start gap-4">
              <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/20">
                <Zap className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">الحل</h3>
                <p className="text-body-color dark:text-body-color-dark mt-1">{item.solution}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/20">
                <TrendingUp className="h-6 w-6 text-green-500 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">النتيجة</h3>
                <p className="text-body-color dark:text-body-color-dark mt-1">{item.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}