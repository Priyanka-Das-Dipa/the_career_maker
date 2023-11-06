import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="w-full">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className=" flex flex-col justify-center mx-auto md:p-8">
            <h2 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
              <details>
                <summary className="text-xl font-bold  py-2 outline-none cursor-pointer focus:underline">
                What is an online career in fitness and sports?
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-xl ">
                  An online career in fitness and sports refers to a profession or job that involves using the internet and digital platforms to offer services, information, coaching, training, or products related to fitness and sports. This can include personal training, coaching, content creation, e-commerce, and more.
                  </p>
                </div>
              </details>
              <details>
                <summary className="text-xl font-bold py-2 outline-none cursor-pointer focus:underline">
                What types of online careers are available in the fitness and sports industry?
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-xl ">
                  Online fitness and sports careers can include personal trainers, sports coaches, fitness bloggers, YouTubers, online course creators, nutritionists, online retailers of sports equipment, and social media influencers, among others.
                  </p>
                </div>
              </details>
              <details>
                <summary className="text-xl font-bold py-2 outline-none cursor-pointer focus:underline">
                How can I become an online fitness or sports coach?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-xl ">
                  To become an online coach, you'll typically need to have the necessary qualifications, certifications, and expertise in your chosen field. You can then create online courses, offer virtual coaching sessions, and use social media and websites to attract clients.
                  </p>
                  
                </div>
              </details>
              <details>
                <summary className="text-xl font-bold py-2 outline-none cursor-pointer focus:underline">
                What qualifications and certifications are required for a career in fitness and sports online?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-xl ">
                  The specific qualifications and certifications required depend on your area of expertise. For example, becoming a certified personal trainer may require a relevant certification like NASM or ACE. Sports coaching may require coaching certifications. Nutritionists may need registered dietitian credentials. It's essential to research and meet the relevant requirements for your field.
                  </p>
                  
                </div>
              </details>
              <details>
                <summary className="text-xl font-bold py-2 outline-none cursor-pointer focus:underline">
                How can I build an online presence as a fitness or sports professional?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-xl ">
                  Building an online presence involves creating a website or blog, utilizing social media platforms, and producing high-quality content. You can also engage with your audience. 
                  </p>
                  
                </div>
              </details>
              <details>
                <summary className="text-xl font-bold py-2 outline-none cursor-pointer focus:underline">
                How do I monetize my online fitness and sports career?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-xl ">
                  You can monetize your online career by offering paid coaching or training sessions, selling digital products (e.g., workout plans, e-books), earning through affiliate marketing, partnering with brands, and using platforms like Patreon for subscriber-based content. 
                  </p>
                  
                </div>
              </details>
              <details>
                <summary className="text-xl font-bold py-2 outline-none cursor-pointer focus:underline">
                Is it possible to have a successful online career in fitness and sports without formal education?
                </summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className="text-xl ">
                  While formal education can be beneficial, it's possible to build a successful online career in fitness and sports through practical experience, certifications, and continuous learning. Many successful professionals have started without formal degrees. 
                  </p>
                  
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
