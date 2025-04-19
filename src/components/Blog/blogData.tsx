// src/components/Blog/blogData.tsx
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
    tags: ["Next.js", "تطوير الويب", "أداء الموقع"],
    publishDate: "15 مارس 2024",
    content: `
      <p>في عالم تطوير الويب سريع التطور، يبرز Next.js كإطار عمل React الأكثر تقدمًا والذي يحل العديد من التحديات التي تواجه المطورين. من أبرز مزاياه:</p>
      
      <h3>1. التصيير المسبق (Pre-rendering)</h3>
      <p>يقدم Next.js خيارين للتصيير المسبق: التصيير الثابت (Static Generation) والتصيير على الخادم (Server-side Rendering)، مما يحسن أداء التطبيق ويساعد في تحسين محركات البحث (SEO).</p>
      
      <h3>2. تجربة مطور ممتازة</h3>
      <p>مع ميزات مثل التحميل السريع للصفحات (Fast Refresh)، والتوجيه المدمج (Routing)، ودعم TypeScript افتراضيًا، يصبح التطوير أكثر سلاسة.</p>
      
      <h3>3. الأداء العالي</h3>
      <p>ميزات مثل تقسيم الكود التلقائي (Automatic Code Splitting) والتحسين المسبق للروابط (Prefetching) تضمن تحميلًا أسرع للتطبيق.</p>
      
      <p>تشير الإحصائيات إلى أن المواقع المبنية بـ Next.js تحقق:</p>
      <ul>
        <li>تحسن في سرعة التحميل بنسبة 40%</li>
        <li>تحسن في ترتيب SEO بنسبة 30%</li>
        <li>تقليل معدل الارتداد (Bounce Rate) بنسبة 25%</li>
      </ul>
    `,
    stats: {
      views: 1245,
      comments: 28,
      shares: 142,
    },
    quote: "البساطة هي جوهر الأداء العالي – وهذا ما يحققه Next.js ببراعة.",
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
      designation: "خبيرة ذكاء اصطناعي",
    },
    tags: ["الذكاء الاصطناعي", "برمجة", "مستقبل التقنية"],
    publishDate: "2 أبريل 2024",
    content: `
      <p >يشهد مجال تطوير البرمجيات تحولًا جذريًا بفضل الذكاء الاصطناعي، حيث أصبحت الأدوات المدعومة بالذكاء الاصطناعي تغير طريقة عمل المطورين بشكل أساسي:</p>
      
      <h3>1. مساعدات البرمجة الذكية</h3>
      <p>أدوات مثل GitHub Copilot تستخدم نموذج GPT لاقتراح أكواد برمجية كاملة بناءً على تعليقات المطورين، مما يزيد الإنتاجية بنسبة تصل إلى 55%.</p>
      
      <h3>2. تصحيح الأخطاء الذكي</h3>
      <p>تقنيات الذكاء الاصطناعي يمكنها الآن اكتشاف الأخطاء البرمجية بنسبة دقة تصل إلى 80% وتقديم حلول مقترحة.</p>
      
      <h3>3. توليد الشفرات البرمجية</h3>
      <p>أصبحت نماذج الذكاء الاصطناعي مثل Codex قادرة على تحويل الأوامر النصية إلى أكواد برمجية عاملة بلغات متعددة.</p>
      
      <p>حسب دراسة حديثة:</p>
      <ul>
        <li>73% من المطورين يستخدمون أدوات ذكاء اصطناعي في عملهم اليومي</li>
        <li>62% يشعرون أن هذه الأدوات تحسن جودة الأكواد</li>
        <li>45% يتوقعون أن تصبح أساسية في جميع بيئات التطوير خلال 3 سنوات</li>
      </ul>
    `,
    stats: {
      views: 2873,
      comments: 42,
      shares: 356,
    },
    quote:
      "الذكاء الاصطناعي لا يستبدل المبرمجين، بل يمكّنهم من الابتكار بشكل أسرع.",
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
      designation: "خبير تجربة مستخدم",
    },
    tags: ["تصميم", "UI/UX", "تجربة المستخدم"],
    publishDate: "22 مايو 2024",
    content: `
      <p>في عالم يعتمد أكثر من أي وقت مضى على التفاعل الرقمي، أصبح تصميم واجهات المستخدم عاملًا حاسمًا في نجاح التطبيقات والمواقع. إليك أهم الممارسات:</p>
      
      <h3>1. بساطة التصميم</h3>
      <p>التصميم الجيد هو التصميم غير الملحوظ. التركيز على سهولة الاستخدام ووضوح العناصر يقلل من الحمل المعرفي على المستخدم.</p>
      
      <h3>2. التناسق البصري</h3>
      <p>استخدام نظام تصميم متكامل (Design System) يحافظ على تناسق العناصر عبر جميع صفحات التطبيق.</p>
      
      <h3>3. سهولة الوصول</h3>
      <p>تصميم واجهات تلتزم بمبادئ Accessibility (WCAG) لضمان إمكانية استخدامها من قبل الجميع.</p>
      
      <p>إحصائيات مهمة:</p>
      <ul>
        <li>94% من الانطباعات الأولى مرتبطة بالتصميم</li>
        <li>88% من المستخدمين لا يعودون لموقع واجهته سيئة</li>
        <li>كل دولار يستثمر في تحسين UX يعود بمعدل 100 دولار ربح</li>
      </ul>
      
      <h3>أدوات يجب على كل مصمم معرفتها:</h3>
      <p>Figma, Adobe XD, Sketch, InVision, Webflow</p>
    `,
    stats: {
      views: 1892,
      comments: 35,
      shares: 214,
    },
    quote:
      "التصميم الجيد هو التصميم غير الملحوظ. التركيز على سهولة الاستخدام ووضوح العناصر يقلل من الحمل المعرفي على المستخدم.",
  },
  {
    id: 4,
    title: "أفضل إطارات عمل JavaScript لعام 2024",
    paragraph:
      "مع تعدد إطارات عمل الجافاسكريبت، يصبح الاختيار بينها تحديًا. نستعرض في هذا المقال أفضل الخيارات المتاحة ومتى تستخدم كل منها.",
    image: "/images/blog/blog-04.jpg",
    author: {
      name: "نورا الفهد",
      image: "/images/blog/author-04.png",
      designation: "مطوّرة Full Stack",
    },
    tags: ["JavaScript", "Frontend", "مقارنات"],
    publishDate: "10 يونيو 2024",
    content: `
      <p>سوق إطارات عمل الجافاسكريبت يشهد تطورًا سريعًا. إليك تحليلًا لأشهر 5 إطارات عمل:</p>
      
      <h3>1. React.js</h3>
      <p>الأكثر شعبية مع مجتمع دعم ضخم، مثالي للتطبيقات الكبيرة والمعقدة.</p>
      
      <h3>2. Vue.js</h3>
      <p>سهل التعلم مع أداء ممتاز، يناسب المشاريع المتوسطة والصغيرة.</p>
      
      <h3>3. Angular</h3>
      <p>إطار عمل كامل الميزات من Google، يناسب المشاريع الكبيرة والفرق الكبيرة.</p>
      
      <h3>4. Svelte</h3>
      <p>نهج جديد يلغي الحاجة إلى Virtual DOM، مع أداء متميز.</p>
      
      <h3>5. Next.js/Nuxt.js</h3>
      <p>حلول متكاملة للتصيير المسبق وتحسين SEO.</p>
      
      <p>نسب الاستخدام حسب آخر إحصائية:</p>
      <ul>
        <li>React: 42%</li>
        <li>Vue: 21%</li>
        <li>Angular: 18%</li>
        <li>Svelte: 8%</li>
        <li>أخرى: 11%</li>
      </ul>
    `,
    stats: {
      views: 2310,
      comments: 47,
      shares: 298,
    },
    quote: "اختيار الإطار الصحيح هو نصف الطريق نحو تطبيق ناجح.",
  },
];

export default blogData;
