import React from "react";
import Title from "../components/Title";
import { assets } from "../assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="pt-10 text-2xl text-center border-t">
        <Title text1={"CONTACTEZ"} text2={"NOUS"} />
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 md:flex-row mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-600 ">Notre Magasin</p>
          <p className="text-gray-500 ">
            59000 Britania <br /> 2 Rue Alphonse Colas, Lille, France
          </p>
          <p className="text-gray-500 ">
            Tel: (415) 555-0132 <br /> Email: madara@konoha.com
          </p>
          <p className="text-xl font-semibold text-gray-600 ">
            Carrière chez StarLabs
          </p>
          <p className="text-gray-500 ">
            Apprenez plus sur nos équipes et nos opportunités
          </p>
          <button className="px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white">
            Explorez
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
