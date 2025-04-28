// src/components/projects/projectData.js
const projects = [
  {
    id: 1,
    title: "تطبيق بث الأفلام",
    description:
      "تطبيق متكامل لبث الأفلام مع ميزات متقدمة مثل البحث المتطور وقوائم المشاهدة الشخصية ودعم تعدد اللغات ونظام المصادقة.",
    detailedDescription: `
      تطبيق بث الأفلام هو منصة متكاملة تتيح للمستخدمين استكشاف ومشاهدة الأفلام عبر الإنترنت. يتميز التطبيق بواجهة مستخدم بديهية وسلسة مع نظام تصنيف متقدم، توصيات مخصصة، وإمكانية إنشاء قوائم مشاهدة شخصية. يدعم التطبيق تعدد اللغات مع نظام مصادقة آمن لإدارة الحسابات.
    `,
    image: "/images/mockups/Untitled design (4).png",
    images: [
      "/images/mockups/Untitled design (4).png",
      "/images/projects/movie-streaming/main.png",
      "/images/projects/movie-streaming/image-1.png",
      "/images/projects/movie-streaming/image-2.png",
      "/images/projects/movie-streaming/image-3.png",
      "/images/projects/movie-streaming/image-5.png",
      "/images/projects/movie-streaming/image-8.png",
      "/images/projects/movie-streaming/image-11.png",
      "/images/projects/movie-streaming/image.png",
    ],

    category: "موقع ويب متكامل",
    link: "",
    liveLink: "https://movies-website-pearl.vercel.app/en",
    tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "i18n"],
    completionDate: "15 مارس 2025",
    duration: "2 أشهر",
    projectType: "تطبيق ويب تفاعلي",
    projectFeatures: [
      "واجهة مستخدم حديثة وسهلة الاستخدام",
      "نظام بحث متقدم مع تصفية حسب النوع والسنة والتقييم",
      "قوائم مشاهدة شخصية يمكن تخصيصها",
      "دعم تعدد اللغات (العربية والإنجليزية)",
      "مصادقة المستخدم باستخدام Firebase",
      "تصميم متجاوب يعمل على جميع الأجهزة",
    ],
    challenges: [
      {
        challenge:
          "إدارة حالة التطبيق المعقدة مع كميات كبيرة من بيانات الأفلام",
        solution: "تنفيذ إدارة حالة فعالة باستخدام React Context وuseReducer",
        result: "تحسين أداء التطبيق وسهولة صيانة الكود",
      },
      {
        challenge: "تحسين تجربة المستخدم على الأجهزة المحمولة",
        solution: "تصميم متجاوب دقيق مع اختبار مستمر على أجهزة مختلفة",
        result: "تجربة مستخدم سلسة على جميع أحجام الشاشات",
      },
      {
        challenge: "تكامل نظام المصادقة مع واجهة المستخدم متعددة اللغات",
        solution: "تنفيذ نظام i18n مع دعم كامل للاتجاه RTL/LTR",
        result: "تجربة مستخدم متسقة بغض النظر عن اللغة المختارة",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Firebase", "Firestore"],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور ومصمم الواجهة الأمامية",
    status: "مكتمل",
  },

  {
    id: 2,
    title: "موقع رُقي ديجيتال",
    description:
      "وكالة رقمية متخصصة في بناء المواقع الإلكترونية وتقديم حلول تقنية عصرية للشركات والأفراد.",
    image: "/images/mockups/Untitled design (1).png",
    images: ["/images/mockups/Untitled design (1).png"],
    category: "تطبيق ويب تعريفي",
    link: "",
    liveLink: "https://roqe-digital.vercel.app/",
    tags: ["Next JS", "React JS", "Tailwind CSS", "Email JS" ],
    completionDate: "25 ابريل 2025",
    duration: "3 أسابيع",
    projectType: "موقع ويب",
    projectFeatures: [
      "تصميم عصري وجذاب يركز على تجربة المستخدم",
      "نظام إدارة محتوى مرن وسهل الاستخدام",
      "تحسين محركات البحث (SEO) لضمان ظهور الموقع في نتائج البحث",
      "توافق كامل مع جميع أحجام الشاشات والأجهزة",
      "دعم الثيمات اللونية Dark Mode and Night Mode", 
    ],

    challenges: [
      {
        challenge: "تحقيق تصميم متجاوب يعمل على جميع الأجهزة",
        solution: "استخدام تقنيات CSS الحديثة مثل Flexbox وGrid",
        result: "تجربة مستخدم سلسة على جميع أحجام الشاشات",
      },
  
      {
        challenge: "تحسين أداء الموقع وسرعة التحميل",
        solution:
          "استخدام تقنيات تحسين الأداء مثل lazy loading وcode splitting",
        result: "سرعة تحميل عالية وتجربة مستخدم سلسة",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React",  "JavaScript", "Tailwind CSS"],
      backend: ["Email JS"],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور ومصمم الواجهة الأمامية",
    status: "مكتمل",
  },
  {
    id: 3,
    title: "لوحة تحكم فينبيز المالية",
    description:
      "لوحة تحكم مالية مبنية على React تتميز برسوم بيانية تفاعلية (Chart.js)، وحركات سلسة (AOS)، وتصميم متجاوب (Tailwind CSS) لتحسين تجربة المستخدم",
    detailedDescription: `
      لوحة تحكم مالية متقدمة توفر نظرة شاملة على المؤشرات المالية الرئيسية. تتميز اللوحة برسوم بيانية تفاعلية وقابلة للتخصيص، مع إمكانية تصدير التقارير ومتابعة الأداء المالي عبر الوقت. اللوحة مصممة لتلبية احتياجات رواد الأعمال والمديرين الماليين.
    `,
    image: "/images/mockups/Untitled design (3).png",
    images: [
      "/images/mockups/Untitled design (3).png",
      "/images/projects/finBiz/main.png",
      "/images/projects/finBiz/1.png",
      "/images/projects/finBiz/2.png",
      "/images/projects/finBiz/3.png",
      "/images/projects/finBiz/4.png",
      "/images/projects/finBiz/5.png",
      "/images/projects/finBiz/6.png",
      "/images/projects/finBiz/7.png",
      "/images/projects/finBiz/8.png",
      "/images/projects/finBiz/9.png",
    ],
    category: "موقع ويب",
    link: "",
    liveLink: "https://finbiz-design.netlify.app/",
    tags: ["React", "Chart.js", "Tailwind CSS", "AOS"],

    completionDate: "20 ديسبمبر 2024",
    duration: "2 أسابيع",
    projectType: "لوحة تحكم مالية",
    projectFeatures: [
      "لوحة معلومات رئيسية مع نظرة عامة على المؤشرات المالية",
      "رسوم بيانية تفاعلية وقابلة للتخصيص",
      "واجهة مستخدم قابلة للتخصيص حسب تفضيلات المستخدم",
      "تصميم متجاوب يعمل على جميع الأجهزة",
      "نظام مصادقة آمن للوصول إلى البيانات",
    ],
    challenges: [
   
      {
        challenge: "إنشاء رسوم بيانية معقدة وسهلة الفهم",
        solution: "استخدام Chart.js مع تخصيصات متقدمة للرسوم",
        result: "عرض مرئي واضح للمعلومات المالية المعقدة",
      },
   
    ],
    techStack: {
      frontend: ["React", "Chart.js", "Tailwind CSS", "AOS"],
      stateManagement: ["React Context", ],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور الواجهة الأمامية",
    status: "مكتمل",
  },
  {
    id: 4,
    title: "منصة مسند",
    description:
      "منصة تدريبية تربط بين الشركات والموظفين مع لوحة تحكم متكاملة. تسلط الضوء على قيمة المنصة من خلال شعارات الشركات والميزات الأساسية",
    image: "/images/mockups/Untitled design (5).png",
    images: [
      "/images/mockups/Untitled design (5).png",
      "/images/projects/mosnad-platform/1.png",
      "/images/projects/mosnad-platform/2.png",
      "/images/projects/mosnad-platform/3.png",
    ],
    category: "منصة ويب مع لوحة تحكم",
    link: "https://github.com/Mosnad-Web01/mosnad-platform",
    liveLink: "",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Next.js", "Sanctom API"],
    completionDate: "not yet",
    duration: "3 أشهر",
    projectType: "منصة ويب",
    projectFeatures: [
      "لوحة تحكم متكاملة لإدارة المستخدمين والدورات",
      "نظام تقييم للدورات والمستخدمين",
      "دعم متعدد اللغات مع إمكانية التخصيص",
      "تحسين محركات البحث (SEO) لضمان ظهور الموقع في نتائج البحث",
      "نظام أمان متقدم لحماية البيانات والمعلومات الحساسة",
      "توافق كامل مع جميع أحجام الشاشات والأجهزة",
    ],
    challenges: [
      {
        challenge: "تحقيق تصميم متجاوب يعمل على جميع الأجهزة",
        solution: "استخدام تقنيات CSS الحديثة مثل Flexbox وGrid",
        result: "تجربة مستخدم سلسة على جميع أحجام الشاشات",
      },
      {
        challenge: "ضمان أمان البيانات والمعلومات الحساسة",
        solution: "تنفيذ بروتوكولات أمان متقدمة وتشفير البيانات",
        result: "حماية قوية ضد الهجمات الإلكترونية",
      },
      {
        challenge: "تحسين أداء الموقع وسرعة التحميل",
        solution:
          "استخدام تقنيات تحسين الأداء مثل lazy loading وcode splitting",
        result: "سرعة تحميل عالية وتجربة مستخدم سلسة",
      },
    ],
    techStack: {
      frontend: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
      backend: ["Laravel", "PHP", "MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور ومصمم الواجهة الأمامية",
    status: "غير مكتمل",
  },
  {
    id: 5,
    title: "مطعم ساكورا سوشي",
    description:
      "موقع عصري لمطعم سوشي ياباني يقدم تجربة طعام فريدة.",

    image: "/images/mockups/Untitled design (2).png",
    images: ["/images/mockups/Untitled design (2).png"],
    category: "موقع ويب",
    link: "",
    liveLink: "https://yasseresam.github.io/Sushiman---Japanese-Food-Website/",
    tags: ["HTML", "CSS", "JS", "AOS"],
    completionDate: "15 مارس 2024",
    duration: "3 أسابيع",
    projectType: "موقع ويب",
    projectFeatures: [
      "تصميم عصري وجذاب يركز على تجربة المستخدم",
      "قوائم تفاعلية تعرض الأطباق والمشروبات",
      "تحسين لمحركات البحث وسرعة تحميل عالية",
      "توافق كامل مع جميع أحجام الشاشات",
    ],

    challenges: [
      {
        challenge: "تحقيق تصميم متجاوب يعمل على جميع الأجهزة",
        solution: "استخدام تقنيات CSS الحديثة مثل Flexbox وGrid",
        result: "تجربة مستخدم سلسة على جميع أحجام الشاشات",
      },
      {
        challenge: "تحسين أداء الموقع وسرعة التحميل",
        solution:
          "استخدام تقنيات تحسين الأداء مثل lazy loading وcode splitting",
        result: "سرعة تحميل عالية وتجربة مستخدم سلسة",
      },
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript", "AOS"],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور ومصمم الواجهة الأمامية",
    status: "مكتمل",
  },
  {
    id: 6,
    title: "أداة إدارة المشاريع - Kanban",
    description:
      "أداة لإدارة المشاريع تدعم طريقة كانبان لتتبع المهام. توفر إنشاء أعمدة وبطاقات وسحب وإفلات، بالإضافة إلى إمكانية دعوة أعضاء الفريق وتتبع تقدم المشروع. مبنية باستخدام Next.js للواجهة الأمامية وLaravel للـ API.",
    image: "/images/mockups/Untitled design (6).png",
    images: ["/images/mockups/Untitled design (6).png"],
    category: "تطبيق ويب لإدارة المشاريع",
    link: "https://github.com/ahmedalsanadi/project-management",
    liveLink: "",
    tags: ["Next.js", "Laravel", "Kanban", "Tailwind CSS", "API"],
    completionDate: "15 مارس 2023",
    duration: "3 أشهر",
    projectType: "تطبيق ويب",
    projectFeatures: [
      "إنشاء وإدارة المشاريع والمهام",
      "نظام سحب وإفلات لتسهيل إدارة المهام",
      "إمكانية دعوة أعضاء الفريق والتعاون",
      "تتبع تقدم المشروع والمهام",
      "واجهة مستخدم متجاوبة وسهلة الاستخدام",
      "نظام إشعارات للتحديثات المهمة",
    ],
    challenges: [
      {
        challenge: "تنفيذ نظام سحب وإفلات فعال",
        solution: "استخدام مكتبات مثل React Beautiful DnD",
        result: "تجربة مستخدم سلسة وسهلة",
      },
      {
        challenge: "إدارة حالة التطبيق المعقدة",
        solution: "استخدام Redux Toolkit مع تقسيم الحالة بشكل منطقي",
        result: "إدارة حالة فعالة وسهلة الصيانة",
      },
      {
        challenge: "تحسين أداء التطبيق مع زيادة عدد المستخدمين",
        solution: "تنفيذ التخزين المؤقت على جانب الخادم والعميل",
        result: "أداء عالي حتى مع زيادة الحمل",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Laravel", "PHP", "MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور ومصمم الواجهة الأمامية",
    status: "غير مكتمل",
  },
  {
    id:7,
    title: "تطبيق تويتر",
    description:
      "تطبيق ويب متكامل مصمم لمحاكاة الوظائف الأساسية لمنصة التواصل الاجتماعي الشهيرة تويتر",
    detailedDescription: `
        تطبيق تويتر المصغر هو نسخة مبسطة من منصة التواصل الاجتماعي الشهيرة، يحتوي على الميزات الأساسية مثل التغريدات، المتابعة، الإعجابات، والردود. تم بناء التطبيق باستخدام تقنيات حديثة مع التركيز على الأداء وتجربة المستخدم.
      `,
    image: "/images/projects/twitter-app/main.png",
    images: [
      "/images/projects/twitter-app/main.png",
      "/images/projects/twitter-app/1.png",
      "/images/projects/twitter-app/2.png",
    ],
    category: "تطبيق ويب",
    link: "",
    liveLink: "https://twitter-2n7ic2inc-ahmedalsanadis-projects.vercel.app/",
    tags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
    ],
    completionDate: "30 أبريل 2023",
    duration: "5 أسابيع",
    projectType: "منصة تواصل اجتماعي",
    projectFeatures: [
      "إنشاء وعرض التغريدات مع دعم الوسائط المتعددة",
      "نظام متابعة للمستخدمين الآخرين",
      "تفاعلات التغريدات (إعجابات، إعادة تغريد، تعليقات)",
      "ملفات تعريف مستخدمين قابلة للتخصيص",
      "نظام إشعارات في الوقت الحقيقي",
      "تصميم متجاوب يعمل على جميع الأجهزة",
      "نظام مصادقة آمن باستخدام NextAuth",
    ],
    challenges: [
      {
        challenge: "تنفيذ تحديثات في الوقت الحقيقي للتغريدات والإشعارات",
        solution: "استخدام تقنيات مثل WebSockets وServer-Sent Events",
        result: "تجربة مستخدم تفاعلية مع تحديثات فورية",
      },
      {
        challenge: "إدارة حالة التطبيق المعقدة مع العديد من التفاعلات",
        solution: "استخدام Redux Toolkit مع تقسيم الحالة بشكل منطقي",
        result: "إدارة حالة فعالة وسهلة الصيانة",
      },
      {
        challenge: "تحسين أداء التطبيق مع زيادة عدد المستخدمين",
        solution: "تنفيذ التخزين المؤقت على جانب الخادم والعميل",
        result: "أداء عالي حتى مع زيادة الحمل",
      },
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Prisma", "MongoDB"],
      authentication: ["NextAuth"],
      tools: ["Git", "GitHub", "VS Code", "MongoDB Compass"],
    },
    role: "مطور الواجهة الأمامية والخلفية",
    status: "مكتمل",
  },
  {
    id: 8,
    title: "منصة التوظيف بيكسل",
    description:
      "تطبيق ويب مبني بـ Laravel لإدارة الوظائف والتقديم عليها، يتضمن ملفات تعريف لأصحاب العمل، وأوصاف وظيفية مفصلة، ووظائف التقديم. مبني باستخدام Laravel وTailwind CSS",
    image: "/images/mockups/jobPosting.png",
    images: ["/images/mockups/jobPosting.png"],
    category: "تطبيق ويب",
    link: "https://github.com/ahmedalsanadi/Pixel-Job-App-Site",
    liveLink: "",
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    completionDate: "15 مارس 2025",
    duration: "3 أشهر",
    projectType: "تطبيق ويب",
    projectFeatures: [
      "إنشاء وإدارة الوظائف والتقديم عليها",
      "ملفات تعريف لأصحاب العمل مع تفاصيل الشركة",
      "واجهة مستخدم متجاوبة وسهلة الاستخدام",
    ],
    challenges: [
      {
        challenge: "إدارة حالة التطبيق المعقدة",
        solution: "استخدام Laravel مع تقسيم الحالة بشكل منطقي",
        result: "إدارة حالة فعالة وسهلة الصيانة",
      },
      {
        challenge: "تحسين أداء التطبيق مع زيادة عدد المستخدمين",
        solution: "تنفيذ التخزين المؤقت على جانب الخادم والعميل",
        result: "أداء عالي حتى مع زيادة الحمل",
      },
      {
        challenge: "ضمان أمان البيانات والمعلومات الحساسة",
        solution: "تنفيذ بروتوكولات أمان متقدمة وتشفير البيانات",
        result: "حماية قوية ضد الهجمات الإلكترونية",
      },
    ],
    techStack: {
      frontend: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      backend: ["Laravel", "PHP", "MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Figma"],
    },
    role: "مطور ومصمم الواجهة الأمامية",
    status: "غير مكتمل",
  },
];

export default projects;
