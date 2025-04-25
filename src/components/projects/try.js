// src/components/projects/projectData.js
const projects = [
    {
      id: 1,
      title: "تطبيق بث الأفلام",
      description: "تطبيق متكامل لبث الأفلام مع ميزات متقدمة مثل البحث المتطور وقوائم المشاهدة الشخصية ودعم تعدد اللغات ونظام المصادقة.",
      detailedDescription: `
        تطبيق بث الأفلام هو منصة متكاملة تتيح للمستخدمين استكشاف ومشاهدة الأفلام عبر الإنترنت. يتميز التطبيق بواجهة مستخدم بديهية وسلسة مع نظام تصنيف متقدم، توصيات مخصصة، وإمكانية إنشاء قوائم مشاهدة شخصية. يدعم التطبيق تعدد اللغات مع نظام مصادقة آمن لإدارة الحسابات.
      `,
      image: "/images/projects/movie-streaming/main.png",
      images: [
        "/images/projects/movie-streaming/main.png",
        "/images/projects/movie-streaming/image-1.png",
        "/images/projects/movie-streaming/image.png",
        "/images/projects/movie-streaming/image-2.png",
        "/images/projects/movie-streaming/image-3.png",
        "/images/projects/movie-streaming/image-4.png",
        "/images/projects/movie-streaming/image-5.png",
        "/images/projects/movie-streaming/image-6.png",
        "/images/projects/movie-streaming/image-7.png",
        "/images/projects/movie-streaming/image-8.png",
        "/images/projects/movie-streaming/image-9.png",
        "/images/projects/movie-streaming/image-10.png",
        "/images/projects/movie-streaming/image-11.png",
        "/images/projects/movie-streaming/image-12.png",
        "/images/projects/movie-streaming/image-13.png",
      ],
      category: "تطبيق ويب",
      link: "https://github.com/ahmedalsanadi/Movie-Streaming-App",
      liveLink: "https://movie-streaming-app-virid.vercel.app",
      tags: ["Next.js", "React", "Tailwind CSS", "Firebase", "i18n"],
      completionDate: "15 مارس 2023",
      duration: "3 أشهر",
      projectType: "تطبيق ويب تفاعلي",
      projectFeatures: [
        "واجهة مستخدم حديثة وسهلة الاستخدام",
        "نظام بحث متقدم مع تصفية حسب النوع والسنة والتقييم",
        "قوائم مشاهدة شخصية يمكن تخصيصها",
        "نظام تقييم وتعليقات على الأفلام",
        "دعم تعدد اللغات (العربية والإنجليزية)",
        "مصادقة المستخدم باستخدام Firebase",
        "تصميم متجاوب يعمل على جميع الأجهزة"
      ],
      challenges: [
        {
          challenge: "إدارة حالة التطبيق المعقدة مع كميات كبيرة من بيانات الأفلام",
          solution: "تنفيذ إدارة حالة فعالة باستخدام React Context وuseReducer",
          result: "تحسين أداء التطبيق وسهولة صيانة الكود"
        },
        {
          challenge: "تحسين تجربة المستخدم على الأجهزة المحمولة",
          solution: "تصميم متجاوب دقيق مع اختبار مستمر على أجهزة مختلفة",
          result: "تجربة مستخدم سلسة على جميع أحجام الشاشات"
        },
        {
          challenge: "تكامل نظام المصادقة مع واجهة المستخدم متعددة اللغات",
          solution: "تنفيذ نظام i18n مع دعم كامل للاتجاه RTL/LTR",
          result: "تجربة مستخدم متسقة بغض النظر عن اللغة المختارة"
        }
      ],
      techStack: {
        frontend: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        backend: ["Firebase", "Firestore"],
        tools: ["Git", "GitHub", "VS Code", "Figma"]
      },
      role: "مطور ومصمم الواجهة الأمامية",
      status: "مكتمل"
    },
    {
      id: 2,
      title: "منصة التوظيف بيكسل",
      description: "تطبيق ويب مبني بـ Laravel لإدارة الوظائف والتقديم عليها، يتضمن ملفات تعريف لأصحاب العمل، وأوصاف وظيفية مفصلة، ووظائف التقديم.",
      detailedDescription: `
        منصة بيكسل للتوظيف هي نظام متكامل لإدارة الوظائف يربط بين أصحاب العمل والباحثين عن عمل. تقدم المنصة ميزات متقدمة مثل إنشاء ملفات تعريف تفصيلية، نشر الوظائف، إدارة التطبيقات، ونظام مراسلة داخلي. تم بناء النظام مع التركيز على سهولة الاستخدام والأمان.
      `,
      image: "/images/projects/pixel-jobs/main.png",
      images: [
        "/images/projects/pixel-jobs/1.png",
        "/images/projects/pixel-jobs/2.png",
        "/images/projects/pixel-jobs/3.png",
        "/images/projects/pixel-jobs/4.png",
        "/images/projects/pixel-jobs/5.png",
        "/images/projects/pixel-jobs/6.png",
        "/images/projects/pixel-jobs/7.png",
        "/images/projects/pixel-jobs/8.png",
      ],
      category: "تطبيق ويب",
      link: "https://github.com/ahmedalsanadi/Pixel-Job-App-Site",
      liveLink: "",
      tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
      completionDate: "10 يناير 2023",
      duration: "4 أشهر",
      projectType: "نظام إدارة الوظائف",
      projectFeatures: [
        "لوحة تحكم متكاملة لكل من أصحاب العمل والباحثين عن عمل",
        "نظام نشر وإدارة الوظائف مع تصفية متقدم",
        "نظام تقديم على الوظائف مع متابعة الحالة",
        "نظام تقييم ومراجعات لأصحاب العمل",
        "نظام مراسلة داخلي بين الأطراف",
        "تقارير وإحصائيات عن سوق العمل",
        "تصميم متجاوب يعمل على جميع الأجهزة"
      ],
      challenges: [
        {
          challenge: "معالجة كميات كبيرة من بيانات المستخدمين والوظائف",
          solution: "تحسين استعلامات قاعدة البيانات وتنفيذ التخزين المؤقت",
          result: "تحسين أداء النظام مع زيادة عدد المستخدمين"
        },
        {
          challenge: "ضمان أمان البيانات الحساسة للمستخدمين",
          solution: "تنفيذ طبقات أمان متعددة وتشفير البيانات الحساسة",
          result: "نظام آمن يحمي بيانات المستخدمين"
        },
        {
          challenge: "إنشاء نظام مراسلة فعال وموثوق",
          solution: "تنفيذ نظام إشعارات في الوقت الحقيقي باستخدام تقنيات حديثة",
          result: "نظام مراسلة سريع وموثوق للمستخدمين"
        }
      ],
      techStack: {
        frontend: ["Laravel Blade", "Tailwind CSS", "JavaScript"],
        backend: ["Laravel", "PHP", "MySQL"],
        tools: ["Git", "GitHub", "PHPStorm", "MySQL Workbench"]
      },
      role: "مطور الواجهة الأمامية والخلفية",
      status: "مكتمل"
    },
    {
      id: 3,
      title: "صفحة بيكاس",
      description: "صفحة هبوط حديثة لأداة إنتاجية، تتميز بتصميم نظيف وتنقل سهل. تسلط الضوء على قيمة المنصة من خلال شعارات العملاء والميزات الأساسية",
      detailedDescription: `
        صفحة هبوط حديثة ومبتكرة لأداة إنتاجية تعتمد على الذكاء الاصطناعي. تم تصميم الصفحة لتقديم نظرة عامة جذابة عن المنتج مع التركيز على الميزات الرئيسية وقيمة العملاء. الصفحة مصممة لتحقيق أعلى معدلات التحويل مع الحفاظ على تجربة مستخدم ممتازة.
      `,
      image: "/images/projects/biccas/main.png",
      images: [
        "/images/projects/biccas/main.png",
        "/images/projects/biccas/2.png",
        "/images/projects/biccas/3.png",
        "/images/projects/biccas/4.png",
        "/images/projects/biccas/5.png",
        "/images/projects/biccas/6.png",
        "/images/projects/biccas/7.png",
        "/images/projects/biccas/8.png",
      ],
      category: "صفحة هبوط",
      link: "https://github.com/ahmedalsanadi/Biccas-Landing-Page-Ahmed-Al-Sanadi",
      liveLink: "https://ahmedalsanadi.github.io/Biccas-Landing-Page-Ahmed-Al-Sanadi/",
      tags: ["HTML", "CSS", "JavaScript"],
      completionDate: "5 ديسمبر 2022",
      duration: "3 أسابيع",
      projectType: "صفحة هبوط تسويقية",
      projectFeatures: [
        "تصميم عصري وجذاب يركز على تجربة المستخدم",
        "حركات وتفاعلات سلسة لتحسين المشاركة",
        "أقسام واضحة تعرض ميزات المنتج الرئيسية",
        "شهادات عملاء لبناء الثقة",
        "نموذج اتصال سهل الاستخدام",
        "تحسين لمحركات البحث وسرعة تحميل عالية",
        "توافق كامل مع جميع أحجام الشاشات"
      ],
      challenges: [
        {
          challenge: "تحقيق أداء عالي مع الحفاظ على التأثيرات البصرية",
          solution: "تحسين الصور واستخدام تقنيات حديثة مثل lazy loading",
          result: "صفحة سريعة التحميل مع الحفاظ على الجماليات"
        },
        {
          challenge: "ضمان التوافق مع المتصفحات القديمة",
          solution: "استخدام polyfills واختبار شامل عبر المتصفحات",
          result: "تجربة متسقة عبر جميع المتصفحات الشائعة"
        },
        {
          challenge: "تحسين معدلات التحويل",
          solution: "اختبار A/B للعناصر الرئيسية وتحسين مسار التحويل",
          result: "زيادة ملحوظة في معدلات التحويل"
        }
      ],
      techStack: {
        frontend: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        tools: ["Git", "GitHub", "VS Code", "Adobe XD"]
      },
      role: "مصمم ومطور الواجهة الأمامية",
      status: "مكتمل"
    },
    {
      id: 4,
      title: "لوحة تحكم فينبيز المالية",
      description: "لوحة تحكم مالية مبنية على React تتميز برسوم بيانية تفاعلية (Chart.js)، وحركات سلسة (AOS)، وتصميم متجاوب (Tailwind CSS) لتحسين تجربة المستخدم",
      detailedDescription: `
        لوحة تحكم مالية متقدمة توفر نظرة شاملة على المؤشرات المالية الرئيسية. تتميز اللوحة برسوم بيانية تفاعلية وقابلة للتخصيص، مع إمكانية تصدير التقارير ومتابعة الأداء المالي عبر الوقت. اللوحة مصممة لتلبية احتياجات رواد الأعمال والمديرين الماليين.
      `,
      image: "/images/projects/finBiz/main.png",
      images: [
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
      category: "لوحة تحكم",
      link: "https://github.com/ahmedalsanadi/FinBiz",
      liveLink: "https://main--finbiz-al-sanadi.netlify.app/",
      tags: ["React", "Chart.js", "Tailwind CSS", "AOS"],
      completionDate: "20 فبراير 2023",
      duration: "6 أسابيع",
      projectType: "لوحة تحكم مالية",
      projectFeatures: [
        "لوحة معلومات رئيسية مع نظرة عامة على المؤشرات المالية",
        "رسوم بيانية تفاعلية وقابلة للتخصيص",
        "إمكانية تصدير البيانات بتنسيقات مختلفة (PDF, Excel)",
        "نظام تنبيهات للتغيرات المهمة",
        "واجهة مستخدم قابلة للتخصيص حسب تفضيلات المستخدم",
        "تصميم متجاوب يعمل على جميع الأجهزة",
        "نظام مصادقة آمن للوصول إلى البيانات"
      ],
      challenges: [
        {
          challenge: "معالجة وعرض كميات كبيرة من البيانات المالية",
          solution: "تنفيذ virtual scrolling وتحسين استعلامات البيانات",
          result: "أداء سريع حتى مع مجموعات البيانات الكبيرة"
        },
        {
          challenge: "إنشاء رسوم بيانية معقدة وسهلة الفهم",
          solution: "استخدام Chart.js مع تخصيصات متقدمة للرسوم",
          result: "عرض مرئي واضح للمعلومات المالية المعقدة"
        },
        {
          challenge: "ضمان دقة البيانات المالية المعروضة",
          solution: "تنفيذ طبقات تحقق متعددة واختبارات وحدة شاملة",
          result: "نظام موثوق يعرض البيانات بدقة عالية"
        }
      ],
      techStack: {
        frontend: ["React", "Chart.js", "Tailwind CSS", "AOS"],
        stateManagement: ["React Context", "Redux Toolkit"],
        tools: ["Git", "GitHub", "VS Code", "Figma"]
      },
      role: "مطور الواجهة الأمامية",
      status: "مكتمل"
    },
    {
      id: 5,
      title: "تطبيق تويتر",
      description: "تطبيق ويب متكامل مصمم لمحاكاة الوظائف الأساسية لمنصة التواصل الاجتماعي الشهيرة تويتر",
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
      link: "https://github.com/ahmedalsanadi/twitter-app",
      liveLink: "https://twitter-2n7ic2inc-ahmedalsanadis-projects.vercel.app/",
      tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
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
        "نظام مصادقة آمن باستخدام NextAuth"
      ],
      challenges: [
        {
          challenge: "تنفيذ تحديثات في الوقت الحقيقي للتغريدات والإشعارات",
          solution: "استخدام تقنيات مثل WebSockets وServer-Sent Events",
          result: "تجربة مستخدم تفاعلية مع تحديثات فورية"
        },
        {
          challenge: "إدارة حالة التطبيق المعقدة مع العديد من التفاعلات",
          solution: "استخدام Redux Toolkit مع تقسيم الحالة بشكل منطقي",
          result: "إدارة حالة فعالة وسهلة الصيانة"
        },
        {
          challenge: "تحسين أداء التطبيق مع زيادة عدد المستخدمين",
          solution: "تنفيذ التخزين المؤقت على جانب الخادم والعميل",
          result: "أداء عالي حتى مع زيادة الحمل"
        }
      ],
      techStack: {
        frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        backend: ["Next.js API Routes", "Prisma", "MongoDB"],
        authentication: ["NextAuth"],
        tools: ["Git", "GitHub", "VS Code", "MongoDB Compass"]
      },
      role: "مطور الواجهة الأمامية والخلفية",
      status: "مكتمل"
    }
  ];
  
  export default projects;