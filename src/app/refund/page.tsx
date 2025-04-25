import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الاسترجاع | شركتنا",
  description: "تعرف على الشروط الخاصة باسترجاع المبالغ المدفوعة مقابل الخدمات الرقمية.",
};

const RefundPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="سياسة الاسترجاع"
        description="نحن نحرص على رضاك الكامل، وندرك أهمية تقديم خدمات موثوقة. تنطبق السياسة التالية على جميع الخدمات أو المنتجات الرقمية التي نوفرها من خلال موقعنا."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container max-w-3xl text-right">

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">فترة الاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            يمكن للعميل طلب استرجاع خلال مدة أقصاها <strong>3 أيام</strong> من تاريخ الشراء، بشرط عدم استخدام الخدمة أو تحميل أو الوصول إلى المنتج الرقمي (مثل الأكواد، الملفات، أو المحتوى المغلق).
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">الخدمات غير القابلة للاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            لا يحق للعميل استرجاع أي مبالغ في الحالات التالية:
          </p>
            <ul className="list-disc pr-6 pt-2">
              <li>تم استخدام أو تنزيل المنتج الرقمي (مثل ملفات التصميم، الأكواد، أو القوالب).</li>
              <li>في حال تم تنفيذ جزء من الخدمة بالفعل (مثل تركيب، تخصيص، أو تطوير مخصص).</li>
              <li>الخدمات المخصصة التي تم تنفيذها حسب طلب العميل.</li>
              <li>الاشتراكات المدفوعة التي تم تفعيلها وتقديم المحتوى خلالها.</li>
            </ul>

          <h2 className="mb-4 mt-6 text-2xl font-bold text-black dark:text-white">إجراءات طلب الاسترجاع</h2>
          <p className="mb-6 text-body-color text-base font-medium leading-loose sm:text-lg">
            يمكن للعميل التواصل معنا عبر البريد الإلكتروني أو نموذج التواصل الرسمي مع ذكر رقم الطلب وسبب واضح لطلب الاسترجاع. سيتم مراجعة الطلب خلال <strong>2-4 أيام عمل</strong>، وإعلام العميل بالنتيجة عبر البريد الإلكتروني.
          </p>

          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">الرسوم والخصومات</h2>
          <p className="text-body-color text-base font-medium leading-loose sm:text-lg">
            في حال الموافقة على الاسترجاع، قد يتم خصم رسوم إدارية أو تكاليف منصات الدفع الإلكترونية  من المبلغ المسترد، وسيتم توضيح كافة التفاصيل للعميل قبل تنفيذ العملية.
          </p>

        </div>
      </section>
    </>
  );
};

export default RefundPage;
