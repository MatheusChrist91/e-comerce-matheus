import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";
import { MdClose } from "react-icons/md";
import { CartContext } from "../hooks/CartContext";

const CartItem = ({ item }) => {
  const { id, name, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext); 
  return (
    <div className="flex gap-x-4 py-2 lg:border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="Imagem do produto" className="max-w-[70px]" />
        </Link>
        
        <div  className="inline-flex mt-4">
           <button onClick={() => increaseAmount(id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l">
                +
            </button>
            <button onClick={()=> decreaseAmount(id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r">
                -
            </button>
          </div>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase max-w-[200px] hover:underline"
            >
              {name}
              <br />
             <p>{`R$ ${price} (${amount})`}</p>
            </Link>

            <div className="text-xl cursor-pointer">
              <MdClose
                className="hover:text-red-600 transition"
                onClick={() => removeFromCart(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
