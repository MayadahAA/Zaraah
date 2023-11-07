import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "./productData";

interface Product {
  id: number;
  name: string;
  description: string;
  src?: string;
  price: string;
  sun: string;
}

function Searchbar() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState({ q: "", list: [] as Product[] }); // Specify the type here

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const results = products.filter((product: Product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(e.target.value);
    setResult({ q: e.target.value, list: results });
  }  
  

  return (
    <div>
      <form>
        <input
          className="w-52 px-3 py-2 rounded-md"
          type="search"
          placeholder="search"
          value={search}
          onChange={handleChange}
        />
      </form>
      <ul className="bg-white w-52 absolute ">
        {result.q === ""
          ? ""
          : result.list.map((product) => {
              return (
                <li className="border-b-2 p-3 mx-2" key={product.name}>
                  <Link to={`/plant/${product.id}`}>{product.name}</Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Searchbar;
