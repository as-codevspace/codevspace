export default function Home() {
    return (
      <section id="home" class="bg-ds-light-gray pt-12 lg-pt-12 xl-pt-14 pb-14 sm-pb-20 xl-pb-32 flex justify-center items-center sm-min-h-screen 2xl-min-h-full">
        <div class="max-w-8xl mx-auto items-middle sm:py-5">
          <div class="grid grid-cols-1 lg:grid-cols-2 mx-5 sm:mx-20 lg:mx-28 xl:mx-24 2xl:mx-5 lg:gap-20">
            <div class="flex mb-5 md:mb-0 lg:mt-14">
              <div>
                <h1 class="font-serif leading-tight font-bold relative w-full xl:max-w-md 2xl:max-w-xl text-black text-[40px] sm:text-[50px] xl:text-[50px] 2xl:text-[55px]">
                  <span class="text-[45px] sm:text-[50px]">
                    <p>
                      <span class="highlight-syntax">Tech Partner</span>
                    </p>
                    <p>for organizations of all sizes</p>
                  </span>
                </h1>
                <h2 class="text-black mt-4 mb-2 lg:mb-8 md:mb-0 text-lg md:mt-8 lg:pr-6 lg:leanding-6 xl:mt-[28.5px] xl:text-xl 2xl:text-2xl 2xl:leading-10">
                  <span className="codevspace-color"> Codevspace </span> empowers businesses and organizations with innovative
                  technology solutions that drive growth, efficiency, and success.
                </h2>
              </div>
            </div>
            <div class="flex items-center justify-center lg:block mt-5 lg:mt-0 mb-10 sm:mb-0 max-h-[400px] sm:max-h-[485px] lg:max-h-[585px]">
              {/* <img src="assets/site/homepage/new-hero.svg" alt="DevSquad Hero" class="w-[302px] sm:w-[402px] lg:w-[602px]" loading="lazy" data-pagespeed-lsc-url="http://devsquad.com/assets/site/homepage/new-hero.svg" /> */}
              {/* <img
                alt="idea"
                src="https://media.istockphoto.com/id/1413922636/vector/business-project-concept.jpg?s=1024x1024&w=is&k=20&c=tR_yDu7hsdBPqiZzaifZwM1zw2KkQ_GJiY7ftoW2l6g="
                className="w-[302px] sm:w-[402px] lg:w-[602px]"
              /> */}
              <img src="https://media.istockphoto.com/id/1397032626/vector/productivity-gurus-productivity-and-project-management-skills-multitasking-and-time.jpg?s=1024x1024&w=is&k=20&c=Y1APNfjeljTvsfMLALrB_qLSUVfR-ydAe8runVw3s0k="
              alt="Idea to solution"
              className="w-[302px] sm:w-[402px] lg:w-[602px] img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  