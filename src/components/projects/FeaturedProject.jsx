import Image from "next/image";

const FeaturedProject = () => (
  <div
    data-aos="fade-up"
    data-aos-delay="300"
    className="mb-16 overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-gray-800 dark:shadow-gray-800"
  >
    <div className="flex flex-col lg:flex-row">
      <div className="relative h-90 w-full overflow-hidden lg:w-7/12">
        <div className="from-primary/80 to-primary/20 absolute inset-0 z-10 bg-gradient-to-r opacity-40" />
        <Image
          src="https://raw.githubusercontent.com/ahmedalsanadi/Movie-Streaming-App/refs/heads/dev/screenshots/image-1.png"
          fill
          alt="Movie Streaming Project"
          className="object-cover object-center transition-transform duration-700 hover:scale-110"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-0 left-0 z-20 p-6">
          <span className="text-primary rounded-full bg-white px-4 py-1 text-sm font-semibold dark:bg-gray-900">
            مشروع مميز
          </span>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center p-8 lg:w-5/12">
        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
          تطبيق بث الأفلام
        </h3>
        <p className="text-body-color dark:text-body-color-dark mb-6">
          تطبيق متكامل لبث الأفلام مع ميزات متقدمة مثل البحث المتطور وقوائم
          المشاهدة الشخصية ودعم تعدد اللغات ونظام المصادقة. مبني باستخدام
          Next.js وReact وTailwind CSS ..
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {["React", "Chart.js", "Tailwind CSS", "JavaScript"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/ahmedalsanadi/Movie-Streaming-App"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center font-semibold hover:underline"
        >
          مشاهدة المشروع
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5 rtl:rotate-180"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default FeaturedProject;
