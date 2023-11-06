const Services = () => {
  return (
    <div className="h-screen">
      <h1 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">
        Our Services
      </h1>

      <div>
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-semibold ">Donec lectus leo</h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
