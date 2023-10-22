import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../componants/productData";
import Navbar from "../componants/Navbar";
import Footer from "../componants/Footer";

// interface RouteParams {
//   id: string;
// }

const CardDetails: React.FC = () => {
  const id = useParams<string>()?.id;

  if (id === undefined) {
    return <div>Product not found</div>;
  }  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(1);

  const productDetails = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!productDetails) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    alert(`${count} plant added to your cart`);
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="">
        <Link to="/" className="underline flex gap-2 items-center p-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </Link>
        <div className=" flex justify-around p-10 gap-3 max-sm:flex-col items-center  ">
          <div className=" max-sm:justify-center  max-sm:flex max-sm:flex-col justify-between gap-20 items-center  flex flex-col">
            <h1 className="font-bold text-xl">Product Details</h1>
            <img className="w-11/12" src={productDetails.src} alt="" />
          </div>
          <div className="pt-10 flex flex-col justify-between gap-4">
            <h2 className="font-bold text-xl">{productDetails.name}</h2>
            <h3 className="font-normal text-lg ">{productDetails.price}</h3>
            <div className="flex items-center  gap-3">
              <button
                className="rounded-xl bg-green-500  w-6 text-white font-bold h-6"
                onClick={() => setCount(count + 1)}
              >
                +{" "}
              </button>
              <h1>{count}</h1>
              <button
                className="rounded-xl bg-green-500  w-6 text-white font-bold h-6"
                onClick={() => setCount(count - 1)}
              >
                -{" "}
              </button>
            </div>
            <p>{productDetails.description}</p>

            <button
              className="bg-green-700 text-white font-bold   p-2 rounded-md"
              onClick={addToCart}
            >
              {" "}
              add to cart
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CardDetails;
