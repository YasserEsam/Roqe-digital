import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الاسترجاع | شركتنا",
  description: "تعرف على شروط وإجراءات استرجاع المنتجات أو الخدمات.",
};

const RefundPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="سياسة الاسترجاع"
        description="نحن نسعى لرضاك التام. في حال لم تكن راضيًا عن الخدمة أو المنتج، يرجى الاطلاع على سياسة الاسترجاع التالية لمعرفة الخطوات والإجراءات."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-3xl text-right">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">فترة الاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            يمكنك طلب استرجاع خلال 14 يومًا من تاريخ الشراء، بشرط أن يكون المنتج في حالته الأصلية ولم يتم استخدامه أو التعديل عليه.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">إجراءات الاسترجاع</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            يرجى التواصل مع فريق الدعم لدينا لتقديم طلب الاسترجاع، وسنقوم بمعالجة الطلب خلال 3-5 أيام عمل، وفقًا لسياساتنا.
          </p>
        </div>
      </section>
    </>
  );
};

export default RefundPage;
