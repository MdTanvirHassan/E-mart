import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import {FaStar} from "react-icons/fa"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProducts();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="container grid grid-cols-3 gap-4 mx-auto px-8 py-5">
          <Skeleton height={350} />
          <Skeleton height={350} />
          <Skeleton height={350} />
        </div>
        Loading......
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <section className="text-gray-600 m-auto overflow-hidden">
          <div className="container my-24 m-auto">
            <div className="md:ml-10 p-5 grid md:grid-cols-2 gap-8 mx-auto bg-white shadow-xl rounded-md">
              <div className="w-full md:w-[400px] m-auto">
              <img
                alt={product.title}
                className="px-14 md:px-5 w-full lg:h-auto h-64 object-fill object-center rounded m-auto"
                src={product.image}
                
              />
              </div>
              <div className="">
                <h2 className="text-sm pb-5 text-gray-500 tracking-widest">
                  {product.category}
                </h2>
                <h1 className="text-gray-900 text-3xl py-5 font-medium mb-1">
                  {product.title}
                </h1>
                <p className="leading-relaxed py-2 flex m-auto space-x-1">Rating: {product.rating && product.rating.rate} <FaStar className="text-yellow-500 text-xl mx-1"/></p><hr />
                <p className="leading-relaxed py-5">{product.description}</p>

                <div className="flex">
                  <span className="py-5 font-medium text-2xl text-gray-900">
                    ${product.price}
                  </span>
                  
                </div>
                <div className="flex space-x-4">
                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add To Cart
                  </button>
                  <NavLink to="/cart" className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Go to Cart
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
