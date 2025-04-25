const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-16 text-center">
    <h2
      data-aos="fade-up"
      className="mb-4 text-3xl font-bold text-black sm:text-4xl md:text-5xl dark:text-white"
    >
      {title}
    </h2>
    <p
      data-aos="fade-up"
      
      className="text-body-color dark:text-body-color-dark mx-auto max-w-[700px] text-base sm:text-lg"
    >
      {subtitle}
    </p>
  </div>
);

export default SectionHeading;
