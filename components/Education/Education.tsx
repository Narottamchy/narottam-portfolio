import Image from "next/image";

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/education2.png"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="mb-9  text-center">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-4xl">
                  Education
                </h3>
              </div>
              <div className="text-center">
                {/* Senior Secondary */}
                <div className="mb-9 border-2 p-8 rounded-3xl hover:scale-105 hover:text-white hover:shadow-2xl dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100 transition duration-300 ease-in-out">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Senior Secondary
                  </h3>
                  <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Non Medical (2019 - 2021)
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Kendiya Vidyalaya Sector - 5
                  </p>
                </div>
                {/* Bachelor of Technology */}
                <div className="mb-1 border-2 p-8 rounded-3xl hover:scale-105 hover:text-white hover:shadow-2xl dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100 transition duration-300 ease-in-out">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Bachelor of Technology
                  </h3>
                  <p className="mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    AIML (2021 - 2025)
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    Guru Tegh Bahadur Institute of Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
