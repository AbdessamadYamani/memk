import React from "react";
import Banner from "../Banner";
import TrustedCompanies from "../TrustedCompanies";
import Slides from "../Slides";
import Form from "../Form";
import Footer from "../Footer";
// import { TrustedCompanies } from "./components/TrustedCompanies";
// import { Testimonials } from "./components/Testimonials";
// import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between">
      <div className="block pt-20 max-w-7xl mx-auto ">
        <Banner />
        <TrustedCompanies />
        <Slides />
        <Form />
        <Footer />
        {/*
      <TrustedCompanies />
      <Testimonials />
      <ContactForm /> */}
      </div>
    </main>
  );
}
