'use client'

import React from 'react'
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5'
import { LinkSidebar } from './LinkSidebar';
import { useUIStore } from '@/store';
import clsx from 'clsx';

export const Sibedar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

  return (
    <div>
        {/* Background black*/}
        {
            isSideMenuOpen &&(
                <div className='fade-in fixed top-0 w-screen h-screen z-10 backdrop-filter bac backdrop-blur-sm'>
                </div>
            )
        }

         {/** Blur o difuminar*/}
         {
            isSideMenuOpen &&(
                <div className='fade-in fixed top-0 w-screen h-screen z-10 backdrop-filter bac backdrop-blur-sm'
                onClick={() => closeMenu()}
                >
                </div>
            )
         }

        {/** SideMenu */}
        <nav
        // todo: efecto de slide
         className={
            clsx(
                " fixed p-5 right-0 top-0 md:w-1/4 w-1/2 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                {
                    "translate-x-full": !isSideMenuOpen // Aplica la clase CSS "translate-x-full" si el menú lateral no está abierto"
                }
            )
         }>

                <IoCloseOutline
                size={50}
                className='absolute top-5 right-5 cursor-pointer'
                onClick={() =>
                    closeMenu()
                }
                />
                {/* Input*/}
                <div className='relative mt-14'>
                    <IoSearchOutline
                    size={20}
                    className="absolute top-2 left-2 "
                    />
                    <input
                    placeholder='Buscar'
                    className='w-full bg-gray-50 rounded pl-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
                    />
                </div>

                {/* Menu */}
                <LinkSidebar
                href='/auth/login'
                Icon={IoPersonOutline}
                texto='Perfil'
                />

                <LinkSidebar
                href='/'
                Icon={IoTicketOutline}
                texto='Ordenes'
                />

                <LinkSidebar
                href='/'
                Icon={IoLogInOutline}
                texto='Ingresar'
                />

                <LinkSidebar
                href='/'
                Icon={IoLogOutOutline}
                texto='Salir'
                />

                {/** Line Separator o linea separadora */}
                <div className='w-full h-px bg-gray-200 my-10'>
                </div>
                <LinkSidebar
                href='/'
                Icon={IoTicketOutline}
                texto='Ordenes'
                />
                <LinkSidebar
                href='/'
                Icon={IoShirtOutline}
                texto='Productos'
                />
                <LinkSidebar
                href='/'
                Icon={IoPeopleOutline}
                texto='Usuarios'
                />
        </nav>
    </div>
  )
}
