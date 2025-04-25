import Image from "next/image";
import Link from "next/link";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { title, description, image, category, link, tags , id } = project;

  return (
    <Link
    
      href={`/projects/${id}`}
      // href={link}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/50"
      className="group relative block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/50"
    >
      {/* Image with parallax effect */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Floating category chip */}
      <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/90 group-hover:text-white dark:bg-gray-900/90 dark:text-white">
        {category}
      </span>

      {/* Content with slide-up effect */}
      <div className="p-6 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {title}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      {/* Image with parallax effect */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Floating category chip */}
      <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 backdrop-blur-sm transition-all duration-300 group-hover:bg-black/90 group-hover:text-white dark:bg-gray-900/90 dark:text-white">
        {category}
      </span>

      {/* Content with slide-up effect */}
      <div className="p-6 transition-transform duration-500 group-hover:-translate-y-2">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {title}
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-blue-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
          {description}
        </p>

        {/* Tags with hover effects */}

        {/* Tags with hover effects */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-800 dark:bg-gray-700 dark:text-gray-200 dark:group-hover:bg-blue-900 dark:group-hover:text-blue-100"
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-all duration-300 group-hover:bg-blue-100 group-hover:text-blue-800 dark:bg-gray-700 dark:text-gray-200 dark:group-hover:bg-blue-900 dark:group-hover:text-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Hidden overlay that appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>

      {/* Hidden overlay that appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <span className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black shadow-lg">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;