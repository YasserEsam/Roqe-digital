import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="feature-card group w-full p-6 rounded-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 hover:from-primary/5 hover:to-primary/20 border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-lg dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:hover:border-primary/40 relative overflow-hidden">
      {/* Decorative corner effect */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
      
      <div className="icon-wrapper relative mb-6 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="icon-bg absolute -top-3 -left-3 w-[90px] h-[90px] bg-primary/5 rounded-full blur-md group-hover:bg-primary/20 transition-colors duration-300"></div>
        <div className="icon-container relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-md border border-primary/20 group-hover:border-primary/40 group-hover:shadow-primary/20">
          <div className="text-primary transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
        </div>
      </div>
      
      <h3 className="mb-4 text-xl font-bold text-gray-800 sm:text-2xl lg:text-xl xl:text-2xl dark:text-white relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-medium transition-colors duration-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 relative z-10">
        {paragraph}
      </p>
      
      <div className="mt-5 w-10 h-1 bg-primary/60 rounded-full transition-all duration-300 group-hover:w-16 group-hover:bg-primary"></div>
    </div>
  );
};

export default SingleFeature;