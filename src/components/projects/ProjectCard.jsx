import Image from "next/image";

const ProjectCard = ({ project }) => {
  const { title, description, image, category, link, tags } = project;

  return (
    <div
      data-aos="fade-up"
  
      className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800"
    >
      <div className="relative h-auto overflow-hidden">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex w-full items-center justify-between p-6">
            <span className="text-sm font-medium text-white">{category}</span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/80 rounded-full p-2 text-white transition-colors"
            >
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
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-body-color dark:text-body-color-dark mb-4 text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
