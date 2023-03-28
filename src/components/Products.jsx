import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
         componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="container grid grid-cols-3 gap-4 mx-auto px-8 py-5">
          <Skeleton height={350}/>
          <Skeleton height={350}/>
          <Skeleton height={350}/>
        </div>
        Loading......
      </>
    );
  };

  const filterProduct = (category) =>{
      const updatedList = data.filter((item) => item.category === category)
      setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            onClick={()=>setFilter(data)}
            type="button"
            className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ">
            All categories
          </button>
          <button
            onClick={()=>filterProduct("men's clothing")}
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ">
            Men's Collection
          </button>
          <button
            onClick={()=>filterProduct("women's clothing")}
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ">
            Women's Collection
          </button>
          <button
            onClick={()=>filterProduct("electronics")}
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ">
            Electronics
          </button>
          <button
            onClick={()=>filterProduct("jewelery")}
            type="button"
            className="text-gray-900 border border-white hover:border-gray-200  bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ">
            Jewelery
          </button>
        </div>
        <div className="container grid  md:grid-cols-3 gap-4 mx-auto px-8 py-5">
          {filter.map((product) => {
            return (
              <>
                <div key={product.id} className="m-auto bg-white p-2 rounded-md shadow-xl">
                  <a href="/#">
                    <img
                      className="rounded-t-lg h-[300px] w-[300px] p-8"
                      src={product.image}
                      alt={product.title}
                      height="250px"
                    />
                  </a>
                  <hr />
                  <div className="p-5 m-auto text-center bg-white shadow-lg rounded-md">
                    <h6 className="text-gray-400 uppercase text-sm">
                      {product.category}
                    </h6>
                    <a href="/#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 ">
                        {product.title.substring(0, 12)}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">
                      ${product.price}
                    </p>
                    <button
                      href="/#"
                      className="inline-flex w-full justify-center px-3  py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <h2 className="text-center pt-10 pb-5">Latest Products</h2>
      <hr />

      <div className="">{loading ? <Loading /> : <ShowProducts />}</div>
    </div>
  );
};

export default Products;
