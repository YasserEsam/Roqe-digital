import SectionHeading from "./SectionHeading";
import ProjectFilter from "./ProjectFilter";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import projects from "./projectData";
import Link from "next/link";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pt-16 pb-16 md:pt-20 md:pb-20 xl:pt-24 xl:pb-24"
    >
      <div className="container mx-auto px-4">
        <SectionHeading
          title="أعمالنا المميزة"
          subtitle="نقدم لكم مجموعة من أفضل المشاريع..."
        />
        {/* <ProjectFilter /> */}
        <FeaturedProject />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

          {/* Project Card 6 - CTA */}
          <div
            data-aos="fade-up"
            className="group from-primary/90 overflow-hidden rounded-xl bg-gradient-to-br to-purple-600/90 text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-gray-800"
          >
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
              <Link href="/contact">
                <div className="mb-6 rounded-full bg-white/20 p-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </Link>
              <h3 className="mb-4 text-xl font-bold">هل مشروعك هو التالي؟</h3>
              <p className="mb-6">
                دعنا نناقش كيف يمكننا تحويل فكرتك إلى حقيقة. فريقنا جاهز
                لمساعدتك في تحقيق رؤيتك.
              </p>
              <Link
                href="/contact"
                className="text-primary rounded-lg bg-white px-6 py-3 font-semibold transition-colors hover:bg-white/90"
              >
                ابدأ مشروعك الآن
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
