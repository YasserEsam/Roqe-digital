import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "أعمالنا السابقة | شركتنا",
  description: "اطّلع على أبرز المشاريع التي أنجزناها باحترافية وجودة عالية.",
};

const ProjectsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="أعمالنا السابقة"
        description="نفتخر بمجموعة من المشاريع التي عكست التزامنا بالجودة والابتكار. تصفّح نماذج من أعمالنا التي قمنا بتنفيذها لعملائنا في مختلف القطاعات، وشاهد كيف حوّلنا الأفكار إلى إنجازات ملموسة."
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
