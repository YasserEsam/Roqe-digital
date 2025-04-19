// src/app/blog-details/[id]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import blogData from "@/components/Blog/blogData";
import { Calendar, MessageSquare, Eye, Clock } from "lucide-react";
import TagList from "@/components/Blog/TagList";
import ShareSection from "@/components/Blog/ShareSection";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: BlogDetailsProps): Promise<Metadata> {
  const blog = blogData.find((blog) => blog.id === parseInt(params.id));
  return {
    title: blog?.title || "تفاصيل المقال",
    description: blog?.paragraph || "صفحة تفاصيل المقال",
  };
}

const BlogDetailsPage = ({ params }: BlogDetailsProps) => {
  const blog = blogData.find((blog) => blog.id === parseInt(params.id));

  if (!blog) return <div>المقال غير موجود</div>;

  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <section className="pt-[150px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-black sm:text-4xl dark:text-white">
                {blog.title}
              </h2>

              {/* Author & Stats */}
              <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                <div className="flex flex-wrap items-center">
                  <div className="ml-10 mb-5 flex items-center">
                    <div className="relative ml-4 h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-body-color text-base font-medium">
                      بواسطة <span>{blog.author.name}</span>
                    </span>
                  </div>
                  <div className="mb-5 flex items-center">
                    <p className="text-body-color ml-5 flex items-center text-base font-medium">
                      <Calendar className="ml-3 h-4 w-4" />
                      {blog.publishDate}
                    </p>
                    <p className="text-body-color ml-5 flex items-center text-base font-medium">
                      <MessageSquare className="ml-3 h-4 w-4" />
                      {blog.stats.comments}
                    </p>
                    <p className="text-body-color ml-5 flex items-center text-base font-medium">
                      <Eye className="ml-3 h-4 w-4" />
                      {blog.stats.views}
                    </p>
                    <p className="text-body-color flex items-center text-base font-medium">
                      <Clock className="ml-3 h-4 w-4" />
                      {readingTime} دقيقة قراءة
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <a
                    href="#0"
                    className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                  >
                    {blog.tags[0]}
                  </a>
                </div>
              </div>

              {/* Paragraph and Image */}
              <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg">
                {blog.paragraph}
              </p>

              <div className="mb-10 w-full overflow-hidden rounded-sm">
                <div className="relative aspect-97/60 sm:aspect-97/44">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* HTML Content */}
              <div
                className="blog-content text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Quote Section */}
              <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8">
                <p className="text-body-color text-center text-base font-medium italic">
                &laquo;{blog.quote}&raquo;
                </p>
                <span className="absolute top-0 left-0 z-[-1]">
                  {/* SVG */}
                </span>
              </div>

              {/* Tags & Share Buttons - CLIENT COMPONENTS */}
              <div className="items-center justify-between sm:flex">
                <TagList tags={blog.tags} />
                <ShareSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsPage;
