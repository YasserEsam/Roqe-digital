// src/app/blog-details/[id]/page.tsx
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";
import blogData from "@/components/Blog/blogData";
import { Calendar, MessageSquare, Eye, Clock } from 'lucide-react';

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

  if (!blog) {
    return <div>المقال غير موجود</div>;
  }

  // Calculate reading time (assuming 200 words per minute)
  const wordCount = blog.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <>
      <section className="pt-[150px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  {blog.title}
                </h2>
                <div className="border-body-color/10 mb-10 flex flex-wrap items-center justify-between border-b pb-4 dark:border-white/10">
                  <div className="flex flex-wrap items-center">
                    <div className="mr-10 mb-5 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={blog.author.image}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="text-body-color mb-1 text-base font-medium">
                          بواسطة <span>{blog.author.name}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <Calendar className="mr-3 h-4 w-4" />
                        {blog.publishDate}
                      </p>
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <MessageSquare className="mr-3 h-4 w-4" />
                        {blog.stats.comments}
                      </p>
                      <p className="text-body-color mr-5 flex items-center text-base font-medium">
                        <Eye className="mr-3 h-4 w-4" />
                        {blog.stats.views}
                      </p>
                      <p className="text-body-color flex items-center text-base font-medium">
                        <Clock className="mr-3 h-4 w-4" />
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
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {blog.paragraph}
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  
                  {/* Render the HTML content safely */}
                  <div 
                    className="blog-content text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />

                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-body-color text-center text-base font-medium italic">
                      "التصميم الجيد هو التصميم غير الملحوظ. التركيز على سهولة الاستخدام ووضوح العناصر يقلل من الحمل المعرفي على المستخدم."
                    </p>
                    <span className="absolute top-0 left-0 z-[-1]">
                      <svg
                        width="132"
                        height="109"
                        viewBox="0 0 132 109"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.5"
                          d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                          fill="url(#paint0_linear_111:606)"
                        />
                        <path
                          opacity="0.5"
                          d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                          fill="url(#paint1_linear_111:606)"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="text-body-color mb-3 text-sm font-medium">
                        الوسوم الشائعة:
                      </h4>
                      <div className="flex items-center">
                        {blog.tags.map((tag, index) => (
                          <TagButton key={index} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="text-body-color mb-3 text-sm font-medium sm:text-right">
                        مشاركة هذا المقال:
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;