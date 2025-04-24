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
        description="نحن نسعى لرضاك التام. في حال لم تكن راضيًا عن الخدمة أو المنتج، يرجى الاطلاع على سياسة الاسترجاع التالية لمعرفة الشروط والإجراءات."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-3xl text-right">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">فترة الاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            يمكنك طلب استرجاع أو استبدال المنتج خلال مدة لا تتجاوز 14 يومًا من تاريخ الاستلام، بشرط أن يكون المنتج بحالته الأصلية وغير مستخدم، مع الإبقاء على التغليف الأصلي والفاتورة.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">المنتجات غير القابلة للاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            لا يمكن استرجاع المنتجات المخصصة أو التي تم تعديلها بناءً على طلب العميل، أو تلك التي تظهر عليها علامات الاستخدام.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">إجراءات الاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            يُرجى التواصل مع فريق خدمة العملاء لتقديم طلب الاسترجاع، وذكر رقم الطلب وسبب الإرجاع. سنقوم بمراجعة الطلب خلال 3-5 أيام عمل، وبعد الموافقة سيتم إعادة المبلغ إلى نفس وسيلة الدفع خلال 7-10 أيام عمل.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">الرسوم والتكاليف</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            قد يتم خصم رسوم الشحن أو رسوم إدارية في بعض الحالات وفقًا لطبيعة المنتج وسبب الاسترجاع، وسيتم إعلامك بكافة التفاصيل قبل بدء الإجراء.
          </p>
        </div>
      </section>
    </>
  );
};

export default RefundPage;
