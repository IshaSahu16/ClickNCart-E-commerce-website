// import { getNodeText } from '@testing-library/react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cart);
  const total = useSelector((state) => state.cart.totalQuantity);
  const handleRemove = (productId) => {
    const mydata ={
      quantity: productId.quantity,
      datas: productId.datas
    }
    dispatch(remove(mydata));
  };

  return (
    <div>
      <section className="w-full bg-gray-100 py-12 sm:py-16 md:pt-15 pb-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-[2rem] font-bold text-[#2f7884]">My Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-md md:mt-8">
            <div className="rounded-3xl bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {products.map((product) => (
                      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0" key={product.datas.id}>
                        <div className="shrink-0 relative">

                          <form>
                            <label htmlFor="Line1Qty" className="sr-only text-xl"> Quantity </label>

                            <input
                              type="number"
                              value={product.quantity}
                              id="form1"
                              className="h-8 w-8 rounded-full bg-[#fffbfb] p-0 text-center text-[13px] text-gray-900 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none border"
                              onChange={() => null}
                            />
                          </form>
                          <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={product.datas.image} alt={product.datas.title} />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">{product.datas.title}</p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{(product.datas.price)*(product.quantity)}/</p>
                            </div>

                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                              <button type="button" onClick={() => handleRemove(product)} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" className=""></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">{total}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">Rs. 100</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900"><span className="text-lg font-normal text-gray-800">{total + 100}</span></p>
                </div>

                <div className="mt-6 text-center">
                  <button type="button" className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-[#2f7884]">
                    Place Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Cart;





//     <div>
//       <h3 className='font-semibold text-3xl text-[#FF7D00] text-center pt-6 pb-4'>My Cart</h3>
//       <div className="grid grid-cols-1 p-4">
//         {products.map((product) => (
//           <div key={product.id} className="flex items-center justify-between mb-6 p-4 rounded-md bg-[#f1f9f7]">
//             <img className="h-20 md:h-32 " src={product.image} alt={product.title} />
//             <div className="flex flex-col md:mr-[600px]">
//               <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
//               <h5 className="text-gray-700">{product.price}</h5>
//             </div>
//             <button
//               className="mr-24 bg-[#348d9a] hover:bg-[#31727c] text-white py-2 px-4 rounded-md font-bold transition duration-300 ease-in-out"
//               onClick={() => handleRemove(product.id)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cart;
