import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice'
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    const mydata ={
      quantity:1,
      datas: product
    }
    dispatch(add(mydata));
  }

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8'>
      {products.map((product) => (
        <div className="bg-[#f1f9f7] p-5 text-center rounded-lg" key={product.id} data={product.datas} quantity={product.quantity}>
          <img className='h-20 md:h-32 mx-auto' src={product.image} alt="" />
          <h4 className="mt-4">{product.title}</h4>
          <h5 className="mt-2">{product.price}</h5>
          <button
            onClick={() => handleAdd(product)}
            className="border-none outline-none bg-[#348d9a] py-2 px-4 text-white rounded-md font-bold cursor-pointer transition duration-300 ease-in-out mt-4">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Product
