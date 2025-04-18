import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | شركتنا",
  description: "خصوصيتك تهمّنا. اكتشف كيف نحمي بياناتك ونتعامل معها.",
};

const PrivacyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="سياسة الخصوصية"
        description="نحن نلتزم بحماية خصوصيتك. ستجد في هذه الصفحة كيفية جمع بياناتك، واستخدامها، وحمايتها عند استخدامك لموقعنا وخدماتنا."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-3xl text-right">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">المعلومات التي نجمعها</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            قد نقوم بجمع معلوماتك الشخصية عند التسجيل أو استخدام خدماتنا، مثل الاسم والبريد الإلكتروني. نستخدم هذه البيانات فقط لتحسين تجربتك وتقديم الدعم المناسب.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">حماية المعلومات</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            نستخدم تقنيات وإجراءات أمنية متقدمة لحماية معلوماتك من الوصول غير المصرح به أو الاستخدام غير القانوني.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
