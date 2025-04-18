import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "لماذا يُعدّ Next.js الخيار الأمثل لتطبيقات الويب الحديثة؟",
    paragraph:
      "في هذا المقال، نستعرض الأسباب التي تجعل من Next.js إطار العمل المفضل للمطورين، وكيف يوفّر أداءً عاليًا وتجربة مستخدم ممتازة مع دعم رائع لـ SEO والتصيير على الخادم.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "سامي الجبري",
      image: "/images/blog/author-01.png",
      designation: "مطوّر واجهات أمامية",
    },
    tags: ["Next.js", "تطوير الويب"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "كيف يُغيّر الذكاء الاصطناعي مستقبل البرمجة؟",
    paragraph:
      "من كتابة الأكواد إلى تحليل البيانات، الذكاء الاصطناعي أصبح جزءًا لا يتجزأ من أدوات المطورين. تعرّف على أبرز التطبيقات العملية للذكاء الاصطناعي في مجال تطوير البرمجيات.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "منى القحطاني",
      image: "/images/blog/author-02.png",
      designation: "كاتبة محتوى تقني",
    },
    tags: ["الذكاء الاصطناعي", "برمجة"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "أفضل الممارسات لتصميم واجهات مستخدم جذابة وعملية",
    paragraph:
      "واجهة المستخدم هي أول ما يراه الزائر. في هذا المقال، نشاركك أهم المبادئ التي تجعل التصميم متناسقًا، سهل الاستخدام، ومناسبًا لتجربة المستخدم الحديثة.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "ليث السالمي",
      image: "/images/blog/author-03.png",
      designation: "مصمم UX/UI",
    },
    tags: ["تصميم", "UI/UX"],
    publishDate: "2025",
  },
];

export default blogData;
