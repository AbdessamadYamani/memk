import React from "react";
import contact from "../assets/illustration/Group.svg";

export default function Form() {
  return (
    <div id="contact" className="grow space-y-4 z-0">
      <h1 className="max-w-5xl text-xl font-bold leading-none -tracking-tighter text-neutral-900 md:text-3xl lg:max-w-7xl lg:text-4xl flex  items-center justify-center pt-12">
        <p className="text-customBlue">CONTACTEZ-</p>
        <p className="text-customVert">NOUS</p>
        <div className="-mt-3 h-3  max-w-[300px] bg-gray-200" />
      </h1>
      <div className="relative mx-auto w-full max-w-7xl items-center  z-0">
        <div className="mx-auto flex w-full justify-between text-left">
          <div className="relative mx-auto inline-flex items-center align-middle">
            <div className="text-start">
              <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-gray-500">
                Charting the Course to Success: Navigating the Complexities of
                Business with Strategic Acumen, Dynamic Innovation, and
                Resilient Adaptation, Propelling Enterprises Towards Sustainable
                Growth and Lasting Prosperity.
              </p>
              <div className=" mt-6 flex w-full max-w-3xl gap-2">
                <form className="w-full max-w-lg">
                  <div className="flex flex-row -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block tracking-wide text-gray-700 text-sm font-bold my-2"
                        htmlFor="grid-password"
                      >
                        Nom <span class="text-red-500">*</span>
                      </label>
                      <input
                        className="appearance-none block w-full text-gray-700 bg-slate-100 bg-none border-b-2  border-b-customBlue py-3 px-4 mb-3 leading-tight focus:outline-none "
                        id="grid-password"
                        type="text"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block tracking-wide text-gray-700 text-sm font-bold my-2"
                        htmlFor="grid-password"
                      >
                        Prenom <span class="text-red-500">*</span>
                      </label>
                      <input
                        className="appearance-none block w-full text-gray-700 bg-slate-100 bg-none border-b-2  border-b-customBlue py-3 px-4 mb-3 leading-tight focus:outline-none "
                        id="grid-password"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block tracking-wide text-gray-700 text-sm font-bold my-2"
                        htmlFor="grid-password"
                      >
                        Telephone <span class="text-red-500">*</span>
                      </label>
                      <input
                        className="appearance-none block w-full text-gray-700 bg-slate-100 bg-none border-b-2  border-b-customBlue py-2 px-4 mb-3 leading-tight focus:outline-none "
                        id="grid-password"
                        type="text"
                      />
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block tracking-wide text-gray-700 text-sm font-bold my-2"
                        htmlFor="grid-password"
                      >
                        Email <span class="text-red-500">*</span>
                      </label>
                      <input
                        className="appearance-none block w-full text-gray-700 bg-slate-100 bg-none border-b-2  border-b-customBlue py-2 px-4 mb-3 leading-tight focus:outline-none "
                        id="grid-password"
                        type="text"
                      />
                    </div>
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block tracking-wide text-gray-700 text-sm font-bold my-4"
                        htmlFor="grid-password"
                      >
                        Message <span class="text-red-500">*</span>
                      </label>
                      <textarea
                        rows="5"
                        cols="40"
                        className="appearance-none block w-full bg-slate-100 text-gray-700  rounded-lg bg-none border-2  border-customBlue py-3 px-4 mb-3 leading-tight focus:outline-none resize-none"
                        id="grid-password"
                        type="text"
                      />
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div className="group  ml-12 hidden w-full max-w-lg overflow-hidden rounded-2xl lg:flex">
            <img
              src={contact}
              width={0}
              height={0}
              className="h-full w-full py-32 transform rounded-2xl object-cover transition duration-300 ease-in-out  hover:scale-105"
              sizes="100vw"
              quality={100}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
