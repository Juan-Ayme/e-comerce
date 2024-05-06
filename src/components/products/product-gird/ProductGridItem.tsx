'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Position {
  x: number;
  y: number;
}
interface Props{
    product: Product;
    mousePosition: Position;
}


export const ProductGridItem  = ({product,mousePosition}:Props) => {

  const [displayImage ,setDisplayImage] = useState(product.images[0]);// obtiene la primera imagen del producto

  return (
    <div className='rounded-md overflow-hidden fade-in' style={{
      transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
    }}>
      <Link href={`/product/${product.slug}`}>
      <Image
      alt='product'
      src={`/products/${displayImage}`}
      className='w-full object-cover'
      width={450}
      height={450}
      onMouseEnter={() => { // cambia la imagen al pasar el mouse
        setDisplayImage(product.images[1])
      }}
      onMouseLeave={() => {// cambia la imagen al quitar el mouse
        setDisplayImage(product.images[0])
      }}
      />
      </Link>
      <div className='p-4 flex flex-col '>
        <Link href={`/product/${product.slug}`}>
        <span className='hover:text-blue-700 rounded' >{product.title}</span>
        </Link>
        <span className='font-bold'>${product.price}</span>
      </div>
    </div>
  )
}
