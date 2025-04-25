// src/components/projects/ProjectTechStack.jsx
export default function ProjectTechStack({ techStack }) {
    if (!techStack) return null;
    
    return (
      <div data-aos="fade-up" data-aos-delay="100" className="mb-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          منظومة التقنيات
        </h2>
        
        <div className="space-y-4">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category}>
              <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {translateCategory(category)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function translateCategory(category) {
    const translations = {
      frontend: 'الواجهة الأمامية',
      backend: 'الخلفية',
      devops: 'عمليات التطوير',
      tools: 'الأدوات',
      database: 'قواعد البيانات',
      cloud: 'السحابة',
      mobile: 'الجوال',
      desktop: 'سطح المكتب',
      testing: 'الاختبار',
      design: 'التصميم',
    };
    
    return translations[category] || category;
  }