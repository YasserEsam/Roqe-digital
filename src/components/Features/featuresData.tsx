// featuresData.tsx
import { Feature } from "@/types/feature";
import {
  Code2,
  ShoppingBag,
  SearchCheck,
  LayoutDashboard,
} from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <Code2 size={40} className="text-primary" />,
    title: "تطوير المواقع الإلكترونية",
    paragraph:
      "نُطوّر لك موقع متكامل، سريع وآمن، مصمم بعناية ليتجاوب مع كل الأجهزة ويقدّم تجربة مستخدم سلسة. باستخدام أحدث تقنيات الويب",
  },
  {
    id: 2,
    icon: <ShoppingBag size={40} className="text-primary" />,
    title: "بناء المتاجر الإلكترونية (عبر سلة و زد)",
    paragraph:
      "نجهّز لك متجر إلكتروني جذاب وسهل الاستخدام على أشهر المنصات مثل سلة وزد، مع ربط شامل بأنظمة الدفع، التوصيل، وخدمة العملاء — كل شيء عشان تبدأ مشروعك بقوة.",
  },
  {
    id: 3,
    icon: <SearchCheck size={40} className="text-primary" />,
    title: "تحسين محركات البحث (SEO)",
    paragraph:
      "وش فايدة موقع جميل ما يلقاه أحد؟ نحن نرفع موقعك ليتصدر نتائج البحث في Google بذكاء واستراتيجية. من تحليل الكلمات المفتاحية إلى تحسين سرعة الموقع",
  },
  {
    id: 4,
    icon: <LayoutDashboard size={40} className="text-primary" />,
    title: "تصميم واجهات الاستخدام وتجربة المستخدم",
    paragraph:
      "نؤمن إن التصميم مو بس شكل… هو إحساس وتجربة! نبتكر لك واجهات استخدام عصرية، سهلة، تخلّي زوار موقعك يندمجوا ويحبوا يتصفحوا أكثر",
  },
];

export default featuresData;
