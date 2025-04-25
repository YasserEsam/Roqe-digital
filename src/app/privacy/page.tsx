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
            قد نقوم بجمع معلوماتك الشخصية مثل الاسم، البريد الإلكتروني، ورقم الهاتف عند تسجيلك أو تقديم طلب. كما نقوم بجمع معلومات غير مباشرة مثل نوع الجهاز ونظام التشغيل وسلوك التصفح لتحسين خدماتنا.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">كيفية استخدام المعلومات</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            نستخدم بياناتك لتقديم وتحسين خدماتنا، ومعالجة الطلبات، والتواصل معك، وتقديم عروض خاصة أو إشعارات حسب اهتماماتك. لا نشارك بياناتك مع أي طرف ثالث دون إذن صريح، إلا إذا تطلب الأمر قانونيًا.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">حماية المعلومات</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            نستخدم تقنيات تشفير وأمان متقدمة لحماية معلوماتك من الوصول غير المصرح به أو الفقد أو التعديل أو الإفشاء. نحن نُجري مراجعات دورية لضمان استمرار فعالية التدابير الأمنية.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">حقوقك</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            لديك الحق في الوصول إلى بياناتك، وتصحيحها، أو حذفها، أو الاعتراض على استخدامها. يُمكنك ممارسة هذه الحقوق عبر التواصل معنا في أي وقت.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
