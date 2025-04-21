"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage({ 
            text: "تم إرسال رسالتك بنجاح! سنرد عليك قريباً.", 
            type: "success" 
          });
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage({ 
            text: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى لاحقاً.", 
            type: "error" 
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Timer to hide message after 5 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: "", type: "" });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                هل تحتاج إلى مساعدة؟ راسلنا الآن
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                فريق الدعم لدينا جاهز للرد عليك بأسرع وقت ممكن عبر البريد
                الإلكتروني.
              </p>

              {/* Status Message */}
              {message.text && (
                <div className={`mb-6 rounded-xs p-4 ${
                  message.type === "success" 
                    ? "bg-green-50 text-green-800 border border-green-200" 
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 mr-3 text-lg ${
                      message.type === "success" ? "text-green-500" : "text-red-500"
                    }`}>
                      {message.type === "success" ? "✓" : "!"}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{message.text}</p>
                    </div>
                    <button 
                      onClick={() => setMessage({ text: "", type: "" })}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={sendEmail}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        الاسم الكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="أدخل اسمك الكامل"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        رسالتك
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        placeholder="اكتب رسالتك هنا..."
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;