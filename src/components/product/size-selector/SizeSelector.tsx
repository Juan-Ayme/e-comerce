import { Size } from '@/interfaces'
import clsx from 'clsx';
import React from 'react'

interface Props{
    selectedSize: Size;
    availableSizes: Size[]; // Array de tallas disponibles [S,M,L,XL]
}

export const SizeSelector = ({selectedSize,availableSizes}:Props) => {

    return (
        <div className='my-5'>
        <h3 className='font-bold mb-4'>Tallas disponibles</h3>
        <div className='flex'>
            {
                availableSizes.map(size => (
                    <button
                    key={size}
                    className = {
                        clsx(
                            "mx-2 text-lg cursor-pointer transition-colors duration-200 ease-in-out rounded-full py-2 px-4",
                            {
                              'bg-blue-600 text-white hover:bg-blue-700': size === selectedSize,
                              'bg-white border border-gray-300 text-gray-500 hover:bg-gray-200': size !== selectedSize
                            }
                        )
                      }>
                        {size}
                    </button>
                ))
            }
        </div>
    </div>
  )
}
