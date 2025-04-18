import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  كود نظيف وخالٍ من الأخطاء
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  نكتب الشيفرة كما نكتب قصص النجاح: منظمة، مدروسة، وخالية من
                  الفوضى. نضمن جودة الكود لنوفّر لك أداءً عاليًا وتجربة استخدام
                  سلسة.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  دعم فني يفوق التوقعات
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  لا نتركك وحدك بعد الإطلاق. فريقنا هنا ليساعدك في كل خطوة،
                  ويضمن لك تجربة خالية من التحديات، مهما كانت استفساراتك أو
                  احتياجاتك.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  نبني المستقبل مع Next.js
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  نستخدم Next.js لتطوير مواقع سريعة، آمنة، وقابلة للتوسع —
                  تقنيات حديثة تُبنى بها أفكار الغد، ونستخدمها لتقديم الأفضل لك
                  اليوم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
