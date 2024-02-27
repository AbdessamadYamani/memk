import React from "react";
import bgimg from "../assets/ils nous font confiance/background.svg";

const TrustedCompanies = () => {
  // Data for trusted companies
  const companies = [
    { id: 1, name: "Company 1", img: "/ils nous font confiance/logo1.png" },
    { id: 2, name: "Company 2", img: "/ils nous font confiance/logo2.png" },
    { id: 3, name: "Company 3", img: "/ils nous font confiance/logo3.png" },
    { id: 4, name: "Company 4", img: "/ils nous font confiance/logo4.png" },
    { id: 5, name: "Company 5", img: "/ils nous font confiance/logo5.png" },
    { id: 6, name: "Company 6", img: "/ils nous font confiance/logo6.png" },
    { id: 7, name: "Company 7", img: "/ils nous font confiance/logo7.png" },
    { id: 8, name: "Company 8", img: "/ils nous font confiance/logo8.png" },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-12 mx-auto">
        <h1 className=" max-w-5xl text-xl font-bold leading-none text-center text-white -tracking-tighter pb-12 md:text-3xl lg:max-w-7xl lg:text-4xl">
          ILS NOUS FONT CONFIANCE
        </h1>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          {companies.map((company) => (
            <div key={company.id} className="mx-auto">
              <img src={company.img} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
