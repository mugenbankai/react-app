import React from "react";
import Title from "../components/Title";
import { assets } from "../assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="pt-8 text-2xl text-center border-t">
        <Title text1={"A"} text2={"PROPOS"} />
      </div>

      <div className="flex flex-col gap-16 my-10 md:flex-row">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            inventore similique rem minus deserunt id odio, dolor illo labore
            dicta quidem earum sit perferendis eveniet maxime. Ab animi nostrum
            placeat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
            laudantium accusantium exercitationem, quo nulla ipsum modi laborum
            harum, sapiente quis iusto obcaecati quidem error? Minima blanditiis
            rem quos nostrum?
          </p>
          <b className="text-gray-800">Notre Mission</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo et
            iure, perferendis iste quis quia aut provident excepturi natus atque
            eligendi nostrum, voluptas autem? Repudiandae minus sit rerum
            tenetur praesentium.
          </p>
        </div>
      </div>

      <div className="py-4 text-xl">
        <Title text1={"POURQUOI"} text2={"NOUS CHOISIR"} />
      </div>

      <div className="flex flex-col mb-20 text-sm md:flex-row">
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Assurance Qualité:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            eius dolore laboriosam porro fugiat ab tenetur temporibus, molestiae
            deleniti ipsum asperiores corrupti repellendus iusto. Id et ratione
            qui eaque nisi!
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>A Petit Prix </b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            veniam id quidem dolores autem totam officiis porro odio nihil
            minima quibusdam magni consectetur iusto sed, velit nam temporibus,
            assumenda ea?
          </p>
        </div>
        <div className="flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20">
          <b>Service Incroyable:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus
            unde dolor quos. Beatae sed corporis aliquid reiciendis doloremque
            expedita voluptas odio, blanditiis quos harum perferendis, mollitia
            ipsam unde voluptatum.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
