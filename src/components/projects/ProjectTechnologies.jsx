// src/components/projects/ProjectTechnologies.jsx
export default function ProjectTechnologies({ tags }) {
    if (!tags || tags.length === 0) return null;
    
    return (
      <div data-aos="fade-up" className="mb-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          التقنيات المستخدمة
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }