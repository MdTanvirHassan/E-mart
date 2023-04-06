import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveCartItem } from "../redux/reducers/ProductSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.products);

  const totalPrice =
    carts.length > 0
      ? carts.reduce((acc, a) => {
          return acc + a.price;
        }, 0)
      : 0;

  return (
    <>
      <section className="container py-20 m-auto h-full ">
        <div className="flex justify-between my-10">
          <h1 className="font-bold mb-0 text-black ">Shopping Cart</h1>
          <h6 className="mb-0 text-muted">items: {carts.length} </h6>
        </div>
        <hr className="my-4 border-b-2 border-blue-500" />
        {carts && Object.keys(carts).length > 0 ? (
          carts.map((item, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-6 gap-0 mb-4 justify-between items-center mx-auto bg-white px-8 shadow-xl rounded-md">
                  <div className="col-span-1" >
                    <img
                      src={`${item.image}`}
                      className="w-[150px] h-[150px] text-center "
                      alt="Cotton T-shirt"
                    />
                  </div>
                  <div className="m-auto col-span-2">
                    <h6 className="text-black text-center mb-0">{item.title}</h6>
                  </div>
                  <div className=" flex m-auto col-span-1">
                    <h6 className="text-black text-center mb-0">{item.category}</h6>
                  </div>
                  <div className="m-auto col-span-1">
                    <h6 className="mb-0 text-center">${item.price}</h6>
                  </div>
                  <div className="m-auto col-span-1">
                    <span
                      onClick={() => dispatch(RemoveCartItem(item.id))}
                      className="text-center"
                      style={{ cursor: "pointer" }}
                    >
                      X
                    </span>
                  </div>
                </div>

                <hr className="my-4  border-blue-300" />
              </div>
            );
          })
        ) : (
          <h2 className="text-center">Cart is Empty! Shop Now</h2>
        )}

        <div className="pt-5 flex">
          <h6 className="mb-0">
            <Link to={"/"}>
              <i className="fas fa-long-arrow-alt-left me-2"></i>
              Back to shop
            </Link>
          </h6>
          <h6 className="mx-auto">Total Price : ${totalPrice.toFixed(2)}</h6>
        </div>
      </section>
    </>
  );
};

export default Cart;
