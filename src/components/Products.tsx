import React from 'react'
import { ProductProps } from '../../type.d';
import Image from 'next/image';
const Products = ({productData}: any) => {
   
  return (
    <div className='w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        {productData.map(
            ({
                _id,
                title,
                brand,
                category,
                description,
                image,
                isNew,
                oldPrice,
                price,
        }: ProductProps) => (
            <div key={_id} className='w-full bg-white'>
                <Image width={300} height={300} src={image} alt='productImg' />
            </div>
        ))}
    </div>
  );
};

export default Products