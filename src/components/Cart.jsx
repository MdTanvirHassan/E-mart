import { useEffect,useState } from "react"
import React from 'react'
import { NavLink, useParams } from "react-router-dom";
//import {FaStar} from "react-icons/fa"

const Cart = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getProducts = async () => {
          //setLoading(true);
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          setProduct(await response.json());
         // setLoading(false);
        };
        getProducts();
      }, [id]);
  return (
    <div> 
        <h1>Cart</h1>
         <div key={product.id} className="m-auto bg-white p-2 rounded-md shadow-xl flex">
                  <NavLink to={`products/${product.id}`}>
                    <img
                      className="rounded-t-lg h-[300px] w-[300px] p-8"
                      src={product.image}
                      alt={product.title}
                      height="250px"
                    />
                  </NavLink>
                  
                  <div className="p-5 m-auto text-center bg-white shadow-lg rounded-md">
                    <h6 className="text-gray-400 uppercase text-sm">
                      {product.category}
                    </h6>
                    <a href="/#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-600 ">
                        {product.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">
                      {product.qty} X {product.price}  = ${product.qty * product.price}
                    </p>
                    <NavLink
                      type="button"
                      to={`/products/${product.id}`}
                      className="inline-flex w-full justify-center px-3  py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
    </div>
  )
}

export default Cart