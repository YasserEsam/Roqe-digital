import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="تواصل معنا"
        description="نسعد دائماً بسماعك! إذا كان لديك أي استفسار، اقتراح، أو تحتاج إلى دعم — لا تتردد في مراسلتنا. فريقنا هنا لخدمتك ومساعدتك في كل ما تحتاج إليه. دعنا نبني تواصلاً مميزاً يبدأ من هنا."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
