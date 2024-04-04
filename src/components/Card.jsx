import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";

function Card({ data }) {
  const { id, title, price, image } = data;
  console.log(shortenText(title));
  return (
    <div className="w-64 m-2 p-5 flex flex-col items-start justify-end bg-white border-dashed border-2 boreder-[#e2e2e2] rounded-2xl">
      <img src={image} alt={title} className=" w-60 h-60 p-5 mb-5 bg-white" />
      <h3 className="text-red-500 text-lg">{shortenText(title)}</h3>
      <p className="text-[#666] font-semibold">{price}$</p>
      <div className="w-full flex justify-between items-center">
        <Link
          className="text-2xl h-6 text-red-500 cursor-pointer"
          to={`/products/${id}`}
        >
          <TbListDetails />
        </Link>
        <button className="bg-red-500 text-white border-none text-3xl h-8 w-8 leading-8 p-px rounded-lg cursor-pointer">
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
