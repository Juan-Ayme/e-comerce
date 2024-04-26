'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';

interface Props{
    product: Product;
}

export const ProductGridItem  = ({product}:Props) => {

  const [displayImage ,setDisplayImage] = useState(product.images[0]);// obtiene la primera imagen del producto

  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <Image
      alt='product'
      src={`/products/${displayImage}`}
      className='w-full object-cover'
      width={500}
      height={500}
      onMouseEnter={() => { // cambia la imagen al pasar el mouse
        setDisplayImage(product.images[1])
      }
    }
      onMouseLeave={() => {// cambia la imagen al quitar el mouse
        setDisplayImage(product.images[0])
      }
    }
      />
      <div className='p-4 flex flex-col'>
        <Link
          className='hover:text-blue-700'
          href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className='font-bold'>${product.price}</span>
      </div>
      </div>
  )
}
