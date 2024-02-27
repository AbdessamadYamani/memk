import React from "react";
import hero from "../assets/illustration/Frame.svg";

export default function Banner() {
  return (
    <div className="grow space-y-4 z-0">
      <div className="relative mx-auto w-full max-w-7xl items-center py-12 z-0">
        <div className="mx-auto flex w-full justify-between text-left">
          <div className="group  ml-12 hidden w-full max-w-lg overflow-hidden rounded-2xl lg:flex">
            <img
              src={hero}
              width={0}
              height={0}
              className="h-full w-full transform rounded-2xl object-cover transition duration-300 ease-in-out  hover:scale-105"
              sizes="100vw"
              quality={100}
              alt="Hero"
            />
          </div>
          <div className="relative mx-auto inline-flex items-center align-middle">
            <div className="text-start">
              <h1 className="max-w-5xl text-4xl font-bold leading-none -tracking-tighter text-neutral-900 md:text-5xl lg:max-w-7xl lg:text-6xl">
                <p className="text-customBlue">SUCCESFUL</p>
                <p className="text-customVert">BUSINESS</p>
                <div className="-mt-3 h-3  max-w-[300px] bg-gray-200" />
                <p className="text-customBlue">STRATEGY.</p>
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-gray-500">
                Charting the Course to Success: Navigating the Complexities of
                Business with Strategic Acumen, Dynamic Innovation, and
                Resilient Adaptation, Propelling Enterprises Towards Sustainable
                Growth and Lasting Prosperity.
              </p>
              <div className=" mt-6 flex w-full max-w-2xl gap-2">
                <div className="mt-3 rounded-lg sm:mt-0">
                  <button className="group relative h-10 overflow-hidden  rounded-lg bg-customBlue px-6 text-base font-bold text-white">
                    <a href="#contact" target="_blank">
                      Services
                    </a>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                  </button>
                </div>
                <div className="mt-3 rounded-lg sm:ml-3 sm:mt-0">
                  <button className="group relative h-10 overflow-hidden  rounded-lg border-2 border-customVert hover:bg-customVert px-6 text-base font-bold text-customVert hover:text-white transition duration-300">
                    <a href="#services">Contact US</a>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
