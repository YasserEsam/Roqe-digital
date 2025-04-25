import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "أحدث مقالاتنا",
  description: "نشاركك أفكارًا ملهمة، ومواضيع تقنية حديثة، وتجارب غنية تساعدك على تطوير مهاراتك ومواكبة كل جديد في عالم الويب.",
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="احدث المقالات"
        description="نشاركك افكار ملهمة، ومواضيع تقنية حديثة، وتجارب غنية تساعدك على تطوير مهاراتك ومواكبة كل جديد في عالم الويب."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full"              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
