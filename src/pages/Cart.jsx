import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, navigate, cartItems, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            taille: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    console.log(tempData);
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
        <Title text1={"VOTRE"} text2={"PANIER"} />
      </div>

      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs font-medium sm:text-lg">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">
                      {item.taille}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.taille,
                        Number(e.target.value)
                      )
                }
                className="px-1 py-1 border max-w-10 sm:max-w-20 sm:px-2"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.taille, 0)}
                className="w-4 mr-4 cursor-pointer sm:w-5"
                src={assets.bin_icon}
                alt=""
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="px-8 py-3 my-8 text-sm text-white bg-black"
            >
              PROCEDEZ AU PAIEMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
