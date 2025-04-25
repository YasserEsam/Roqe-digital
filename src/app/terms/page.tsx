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
            من خلال الوصول إلى هذا الموقع أو استخدامه، فإنك توافق على الالتزام بجميع الشروط والأحكام المنصوص عليها هنا. يُحظر استخدام الموقع لأي أغراض غير قانونية، أو تنتهك القوانين المحلية أو الدولية، أو تسيء إلى المستخدمين الآخرين أو تضر بالخدمة أو بالخوادم.
          </p>
         

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">حقوق الملكية الفكرية</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            جميع الحقوق، بما في ذلك حقوق الطبع والنشر، والعلامات التجارية، والمحتوى المرئي والنصي والبرمجي، محفوظة للموقع. يُمنع نسخ أو إعادة نشر أو تعديل أي جزء من المحتوى دون إذن خطي مسبق.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">حدود المسؤولية</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            نحن لا نتحمل مسؤولية أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدامك للموقع أو عدم قدرتك على الوصول إليه.
          </p>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
