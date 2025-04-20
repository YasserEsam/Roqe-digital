import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import { BackgroundSvgs } from "@/components/projects/BackgroundSvgs";
import StatsSection from "@/components/projects/StatsSection";
import PortfolioSection from "@/components/projects/PortfolioSection";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "أعمالنا السابقة | شركتنا",
  description: "اطّلع على أبرز المشاريع التي أنجزناها باحترافية وجودة عالية.",
};

const statsData = [
  { value: 25, label: "دولة" },
  { value: 12, label: "خبير تقني" },
  { value: 238, label: "عميل سعيد" },
  { value: 253, label: "مشروع منجز" },
];


const ProjectsPage = () => {
  return (
    <>
      <section
        id="projects"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-gray-50 pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
                {/* Header */}
              <div className="mx-auto max-w-[800px] text-center">
                {/* Badge */}
                <div className="bg-opacity-10 bg-primary/10 mb-4 inline-block rounded-lg px-5 py-2">
                  <span className=" text-purple-500 dark:text-purple-300 text-sm font-semibold">
                    معرض اعمالنا
                  </span>
                </div>

                {/* Header */}
                <h1
                  data-aos="fade-in"
                  className="mb-5 bg-gradient-to-r from-purple-500 to-pink-300 bg-clip-text text-3xl leading-tight font-bold text-transparent sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                >
                  نبتكر مشاريع
                  <br />
                  تتجاوز التوقعات
                </h1>

                {/* Paragraph */}
                <p className="text-body-color dark:text-blue-200 mb-12 text-base !leading-relaxed">
                  نقدم حلولاً رقمية مبتكرة تجمع بين التصميم الإبداعي والتقنيات
                  المتطورة
                </p>

                {/* Cards Container */}
                <StatsSection stats={statsData} />
              </div>
            </div>
          </div>
        </div>
      <BackgroundSvgs />
      </section>
{/*-------------------------------------------------------------------------*/}

    <PortfolioSection />
    </>
  );
};

export default ProjectsPage;
