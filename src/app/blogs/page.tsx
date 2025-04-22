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
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
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
