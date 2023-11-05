import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <>
      <div className="mt-20 mx-auto w-[650px]">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel  slideInterval={5000} slide={false}>
          <img
            src="https://i.ibb.co/HtjhcjP/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon.jpg"
            alt="..."
          />
          <img
            src="https://i.ibb.co/3TFPCBQ/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-h.jpg"
            alt="..."
          />
          <img
            src="https://i.ibb.co/19GMKZH/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg"
            alt="..."
          />
          <img
            src="https://i.ibb.co/k5CynqG/young-healthy-man-athlete-posing-confident-with-ropes-gym.jpg"
            alt="..."
          />
        </Carousel>
      </div>
      </div>
    </>
  );
};

export default Home;
