import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "To enroll, create an account, browse courses, and click 'Enroll'. Complete payment and start learning.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "Yes, you can request a refund within 7 days of purchase. Check our refund policy for details.",
    },
    {
      question: "Do I need prior experience for courses?",
      answer:
        "No, our courses are for all levels. Each course shows the recommended skill level.",
    },
    {
      question: "How can I become an instructor?",
      answer:
        "Sign up, submit your course through the Instructor Dashboard, and get approval to publish.",
    },
    {
      question: "Is my personal information safe?",
      answer:
        "Yes, we follow strict privacy policies and protect your data at all times.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-pink-600 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="collapse collapse-arrow border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
              <input type="checkbox" /> 
              <div className="collapse-title text-lg font-semibold text-pink-600 dark:text-gray-300">
                {faq.question}
              </div>
              <div className="collapse-content font-semibold text-gray-700 dark:text-gray-300">
                <p>Ans : {faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
