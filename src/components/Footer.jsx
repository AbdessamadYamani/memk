import React from "react";
import logo from "../assets/logo memk service/logo couleur.svg";

export default function Footer() {
  return (
    <footer className="grow space-y-4 z-0 bg-customBlue">
      <div className="flex flex-col md:flex-row mx-auto w-full max-w-7xl items-center justify-between  p-4 md:p-12 z-0">
        <div className=" flex flex-col justify-center items-center gap-4 my-6 md:my-0 mx-6">
          <a href="/" className="flex items-center gap-3">
            <img src={logo} width={200} height={100} alt="logo" />
          </a>
          <a href="/linkedin" className="flex items-center gap-y-6 h-14 w-14">
            <img
              src="/icone/linkdine.png"
              width={120}
              height={100}
              alt="logo"
            />
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-end ">
          <div className=" flex flex-col  items-center gap-4 max-w-md">
            <a href="/linkedin" className="flex items-center gap-y-6 h-14 w-14">
              <img
                src="/icone/localisation.png"
                width={120}
                height={100}
                alt="logo"
              />
            </a>
            <p className="max-w-72 text-center text-white"> Rue Alborj, R Zaineb, App 2, Rabat 10020, Maroc</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-4 max-w-md">
            <a href="/email" className="flex items-center gap-y-6 h-14 w-14">
              <img
                src="/icone/email.png"
                width={120}
                height={100}
                alt="logo"
              />
            </a>
            <p className="max-w-72 text-center text-white"> contact@aaleconseil.com</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-4 max-w-md">
            <a href="/telephone" className="flex items-center gap-y-6 h-14 w-14">
              <img
                src="/icone/telephone.png"
                width={120}
                height={100}
                alt="logo"
              />
            </a>
            <p className="max-w-sm text-center text-white"> +212 6 62 88 28 41</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
