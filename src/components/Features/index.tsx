import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container"  data-aos="fade-up" >
          <SectionTitle
            title="خدمات رقمية تصنع الفرق"  
            paragraph="في رُقيّ ديجيتال، إحنا ما نقدّم خدمات تقليدية… إحنا نصنع تجارب رقمية تخلّي مشروعك يتألق ويترك بصمته! من تصميم واجهات تخطف الأنظار، إلى بناء المواقع متطورة  — نحن شريكك الرقمي الحقيقي."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
