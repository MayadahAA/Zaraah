import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./productData";

const Cards: React.FC = () => {
  const [filter, setFilter] = useState(products);

  function btnFilter(
    plantNeeds:
      | string
      | {
          id: number;
          name: string;
          description: string;
          src: string;
          price: string;
          sun: string;
        }[]
  ) {
    const btnF = products.filter((product) => {
      return product.sun === plantNeeds;
    });
    setFilter(btnF);
  }

  return (
    <>
      <div className="flex justify-center items-center gap-2 my-6 ">
        <button
          className="bg-gray-50 rounded-lg flex flex-col text-xs w-1/4 font-medium text-zinc-700 focus:bg-yellow-300 focus:ring-0 p-2 items-center"
          onClick={() => btnFilter("Full Sun")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
          Need direct Sun
        </button>
        <button
          className="bg-gray-50 rounded-lg flex flex-col w-1/4 text-xs font-medium text-zinc-700 focus:bg-yellow-100 focus:ring-0 p-2 items-center"
          onClick={() => btnFilter("Indirect Light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          Need Indirect Light
        </button>
        <button
          className="bg-gray-50 rounded-lg w-1/4 flex flex-col text-xs font-medium text-zinc-700 focus:bg-blue-300 focus:ring-0 p-2 items-center"
          onClick={() => btnFilter("Low Light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          Need Low Light{" "}
        </button>
      </div>
      <div className="flex flex-wrap max-sm:flex-col gap-20 w-full justify-center items-center">
        {filter.map((product) => (
          <div
            key={product.id}
            className=" shadow-emerald-950/10 shadow-lg  rounded-lg m-3 w-1/4 pb-5 max-sm:w-10/12 h-1/2 gap-4 flex flex-col justify-around items-center"
          >
            <img
              src={product.src}
              alt=""
              className="w-full h-full top-0 rounded-t-lg "
            />
            <h2>{product.name}</h2>
            <p>{product.price} </p>
            <Link
              to={`/plant/${product.id}`}
              className="bg-lime-50  rounded-md p-2 text-xs w-3/4 h-10 items-center justify-center flex text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
