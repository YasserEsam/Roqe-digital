import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "السياسات والشروط | شركتنا",
  description: "تعرّف على الشروط والسياسات التي تنظّم استخدامك لخدماتنا وموقعنا.",
};

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="السياسات والشروط"
        description="باستخدامك لموقعنا وخدماتنا، فإنك توافق على الالتزام بالشروط الموضحة هنا. نحن نلتزم بتوفير تجربة استخدام آمنة وعادلة لكل مستخدم، ونشجعك على قراءة هذه السياسات بعناية."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-3xl text-right">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">شروط الاستخدام</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            باستخدامك لهذا الموقع، فإنك توافق على عدم استخدامه لأي أغراض غير قانونية أو محظورة وفقًا لهذه الشروط. نحتفظ بحق تعديل أو إيقاف أي جزء من الخدمة دون إشعار مسبق.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">حقوق الملكية الفكرية</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            جميع المحتويات، بما في ذلك النصوص والتصميمات والشعارات والرموز، هي ملك حصري لموقعنا، ولا يُسمح باستخدامها أو نسخها دون إذن كتابي مسبق.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
