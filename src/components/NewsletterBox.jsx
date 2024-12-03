import React from "react";

const NewsletterBox = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Inscrivez-vous & obtenez -20% sur tous les produits
      </p>
      <p className="mt-3 text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>

      <form className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2">
        <input
          className="w-full outline-none sm:flex-1"
          type="text"
          placeholder="Entrez votre mail"
          required
        />
        <button
          className="px-10 py-4 text-xs text-white bg-black"
          type="submit"
        >
          Inscription
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
