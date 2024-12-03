import React from "react";
import { assets } from "../assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="w-32 mb-5" src={assets.logo} alt="" />
          <p className="w-full text-gray-600 md:w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Acceuil</li>
            <li>A Propos</li>
            <li>Livraison</li>
            <li>Politiques</li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xl font-medium">CONTACT</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+33-712-456-7890</li>
            <li>madara@konoha.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright - All Right Reserved to the hokage.
        </p>
      </div>
    </div>
  );
};

export default Footer;
