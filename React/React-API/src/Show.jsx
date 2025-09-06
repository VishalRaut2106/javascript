import { useState } from "react";
import axios from "axios";

const Show = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // 👈 extra: error state

  const getProduct = async () => {
    const api = "https://fakestoreapi.com/products";
    try {
      setLoading(true);
      setError(null); // reset error before call
      const res = await axios.get(api);
      setProducts(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products");
    } finally {
      setLoading(false); // always runs
    }
  };

  return (
    <div className="p-5 ">
      <ul className="flex flex-wrap space-y-3">
        {loading && <h1 className="text-xl font-semibold">Loading...</h1>}
        {error && <h1 className="text-red-500">{error}</h1>}

        {!loading &&
          !error &&
          products.length > 0 &&
          products.map((p) => (
            <li
              key={p.id}
              className="w-1/4 p-5   bg-gray-300  rounded-2xl shadow"
            >
              <img className="h-32 w-auto " src={p.image} alt="" />
              <h3 className=" font-bold">{p.title}</h3>
              <p className="text-2xl font-medium text-green-700">${p.price}</p>
            </li>
          ))}
      </ul>

      <button
        onClick={getProduct}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
      >
        Call Product API
      </button>
    </div>
  );
};

export default Show;
