import SectionHeading from "./SectionHeading";
import ProjectFilter from "./ProjectFilter";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

const PortfolioSection = () => {
  const projects = [
    {
      title: "تطبيق بث الأفلام",
      description:
        "تطبيق متكامل لبث الأفلام مع ميزات متقدمة مثل البحث المتطور وقوائم المشاهدة الشخصية ودعم تعدد اللغات ونظام المصادقة. مبني باستخدام Next.js وReact وTailwind CSS",
      image: "https://raw.githubusercontent.com/ahmedalsanadi/Movie-Streaming-App/refs/heads/dev/screenshots/image-8.png", 
      category: "تطبيق ويب",
      link: "https://github.com/ahmedalsanadi/Movie-Streaming-App",
      liveLink: "https://movie-streaming-app-virid.vercel.app",
      tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "i18n"],
    },
    {
      title: "منصة التوظيف بيكسل",
      description:
        "تطبيق ويب مبني بـ Laravel لإدارة الوظائف والتقديم عليها، يتضمن ملفات تعريف لأصحاب العمل، وأوصاف وظيفية مفصلة، ووظائف التقديم. مبني باستخدام Laravel وTailwind CSS",
      image: "https://raw.githubusercontent.com/ahmedalsanadi/Pixel-Job-App-Site/refs/heads/main/screenshots/hero.png",
      category: "تطبيق ويب",
      link: "https://github.com/ahmedalsanadi/Pixel-Job-App-Site",
      liveLink: "",
      tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    },
    {
      title: "صفحة بيكاس",
      description:
        "صفحة هبوط حديثة لأداة إنتاجية، تتميز بتصميم نظيف وتنقل سهل. تسلط الضوء على قيمة المنصة من خلال شعارات العملاء والميزات الأساسية",
      image: "https://raw.githubusercontent.com/ahmedalsanadi/Biccas-Landing-Page-Ahmed-Al-Sanadi/refs/heads/main/screenshots/landing.png",
      category: "صفحة هبوط",
      link: "https://github.com/ahmedalsanadi/Biccas-Landing-Page-Ahmed-Al-Sanadi",
      liveLink: "",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "لوحة تحكم فينبيز المالية",
      description:
        "لوحة تحكم مالية مبنية على React تتميز برسوم بيانية تفاعلية (Chart.js)، وحركات سلسة (AOS)، وتصميم متجاوب (Tailwind CSS) لتحسين تجربة المستخدم",
      image: "https://raw.githubusercontent.com/ahmedalsanadi/FinBiz/refs/heads/main/screenshots/hero.png",
      category: "لوحة تحكم",
      link: "https://github.com/ahmedalsanadi/FinBiz",
      liveLink: "",
      tags: ["React", "Chart.js", "Tailwind CSS", "AOS"],
    },
    {
      title: "تطبيق تويتر",
      description:
        "تطبيق ويب متكامل مصمم لمحاكاة الوظائف الأساسية لمنصة التواصل الاجتماعي الشهيرة تويتر",
      image: "https://private-user-images.githubusercontent.com/76667739/373466344-4964ae58-97ff-4828-a012-b468ffdf9b13.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDUxMTM0ODgsIm5iZiI6MTc0NTExMzE4OCwicGF0aCI6Ii83NjY2NzczOS8zNzM0NjYzNDQtNDk2NGFlNTgtOTdmZi00ODI4LWEwMTItYjQ2OGZmZGY5YjEzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MjAlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDIwVDAxMzk0OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdmNGI1NWFlNDM4NjFjMjJiZGRkOGYwYzE0NDlkM2FjYzdjNjRlM2U1NDc0NjQxOGNmMGUxN2MzYzQzMmQ0OTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ZJYpxginNDIJrJq5pl2E4aj8RCghWIw4QvS-IGsq0rE",
      category: "تطبيق ويب",
      link: "https://github.com/ahmedalsanadi/twitter-app",
      liveLink: "",
      tags: ["TypeScript", "React", "Next.js"],
    },
    {
      title: "تطبيق المدونة",
      description:
        "منصة مدونة بسيطة مبنية على PHP لإنشاء وإدارة المقالات. تتضمن مصادقة المستخدمين، وتحميل الصور، والفئات والعلامات، وتصميم متجاوب",
      image: "https://raw.githubusercontent.com/ahmedalsanadi/My-blog/refs/heads/main/screenshots/image.png",
      category: "تطبيق ويب",
      link: "https://github.com/ahmedalsanadi/My-blog",
      liveLink: "",
      tags: ["PHP", "MySQL", "Bootstrap"],
    },
  ];

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
        <ProjectFilter />
        <FeaturedProject />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={400 + index * 100}
            />
          ))}

          {/* Project Card 6 - CTA */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="group from-primary/90 overflow-hidden rounded-xl bg-gradient-to-br to-purple-600/90 text-white shadow-lg transition-all duration-300 hover:shadow-xl dark:shadow-gray-800"
          >
            <div className="flex h-full flex-col items-center justify-center p-8 text-center">
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
              <h3 className="mb-4 text-xl font-bold">هل مشروعك هو التالي؟</h3>
              <p className="mb-6">
                دعنا نناقش كيف يمكننا تحويل فكرتك إلى حقيقة. فريقنا جاهز
                لمساعدتك في تحقيق رؤيتك.
              </p>
              <a
                href="#contact"
                className="text-primary rounded-lg bg-white px-6 py-3 font-semibold transition-colors hover:bg-white/90"
              >
                ابدأ مشروعك الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
