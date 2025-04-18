import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="من نحن"
        description="نحن نؤمن بأن كل فكرة عظيمة تستحق التنفيذ. في موقعنا، نكرّس جهودنا لصناعة حلول رقمية مبتكرة تساعد الأفراد والشركات على النمو، التطوّر، وتحقيق النجاح الحقيقي."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
