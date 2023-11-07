const OurTeam = () => {
  return (
    <div className="my-10">
      <h2 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">
        Our Team Coaches
      </h2>
      <div className=" ">
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-6 mx-auto space-y-8">
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              <article className="flex  flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="rounded-full  object-cover w-full h-64  dark:bg-gray-500"
                    src="https://i.ibb.co/54KDp55/John-Abraham.jpg"
                  />
                </a>
                <div className="flex flex-col flex-1 p-6 text-center">
                  <p className="text-base  tracki uppercase hover:underline dark:text-violet-400">
                    John Smith
                  </p>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Certified Personal Trainer
                  </h3>
                </div>
              </article>
              <article className="flex  flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="rounded-full  object-cover w-full h-64 dark:bg-gray-500"
                    src="https://i.ibb.co/gFjPm1r/sara.jpg"
                  />
                </a>
                <div className="flex flex-col text-center flex-1 p-6">
                  <p className="text-base tracki uppercase hover:underline dark:text-violet-400">
                    Sarah Davis
                  </p>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Yoga Instructor and Wellness Coach
                  </h3>
                </div>
              </article>
              <article className="flex flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="rounded-full  object-cover w-full h-64  dark:bg-gray-500"
                    src="https://i.ibb.co/0D3WnZP/img3.jpg"
                  />
                </a>
                <div className="flex text-center flex-col flex-1 p-6">
                  <p className="text-base tracki uppercase hover:underline dark:text-violet-400">
                    Michael Rodriguez
                  </p>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Sports Performance Coach
                  </h3>
                </div>
              </article>
              <article className="flex  flex-col dark:bg-gray-900">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                >
                  <img
                    alt=""
                    className="object-cover rounded-full h-64  w-full dark:bg-gray-500"
                    src="https://source.unsplash.com/200x200/?fashion?4"
                  />
                </a>
                <div className="flex text-center flex-col flex-1 p-6">
                  <p className="text-base tracki uppercase hover:underline dark:text-violet-400">
                    Emily Foster
                  </p>
                  <h3 className="flex-1 py-2 text-lg font-semibold leadi">
                    Nutritionist and Fitness Consultant
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurTeam;
