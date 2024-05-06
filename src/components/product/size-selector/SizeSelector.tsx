'use client'
import { Size } from '@/interfaces'
import clsx from 'clsx';
import React, { useState } from 'react'

interface Props{
    selectedSize: Size;
    availableSizes: Size[]; // Array de tallas disponibles [S,M,L,XL]
}

export const SizeSelector = ({selectedSize,availableSizes}:Props) => {
    const [clickedSize, setClickedSize] = useState(selectedSize);

    return (
        <div className='my-5'>
        <h3 className='font-bold mb-4'>Tallas disponibles</h3>
        <div className='flex'>
            {
                availableSizes.map(size => (
                    <button
                    key={size}
                    onClick={() => setClickedSize(size)}
                    className = {
                        clsx(
                            "mx-1 text-lg transition-colors duration-200 ease-in-out rounded-full py-2 px-4",
                                {
                                'bg-blue-600 text-white hover:bg-blue-700': size === clickedSize, //Si es la talla seleccionada
                                'bg-gray-400 border border-gray-400 text-white hover:bg-blue-700': clickedSize !== size //Si no es la talla seleccionada
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
