const filters = [
  "جميع الأعمال",
  "تطوير مواقع",
  "تطبيقات ويب",
  "تحسين محركات البحث",
];

const ProjectFilter = () => (
  <div
    data-aos="fade-up"
    data-aos-delay="200"
    className="mb-12 flex flex-wrap items-center justify-center gap-3"
  >
    {filters.map((label, index) => (
      <button
        key={index}
        className={`rounded-lg px-6 py-2 text-sm font-semibold transition-all ${
          index === 0
            ? "bg-primary hover:bg-primary/80 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        } `}
      >
        {label}
      </button>
    ))}
  </div>
);

export default ProjectFilter;
