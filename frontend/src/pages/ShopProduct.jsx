import React from 'react'
import Product from '../components/Product';

const ShopProduct = () => {
  return (
    <div>
      <div className="text-center p-12">
        <h1 className="font-bold text-4xl text-[#FF7D00]">Shop Our Latest Collection</h1>
        <h1 className="text-3xl py-9  text-[#29717c] font-medium">Ice Chic Collection Drops</h1>
      </div>
      <Product />
    </div>
  )
}

export default ShopProduct