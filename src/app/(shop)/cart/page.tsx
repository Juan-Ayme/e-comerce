import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { SlArrowLeftCircle, SlTrash } from "react-icons/sl";
import {redirect} from "next/navigation";

const productInCart =[
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function AdminPage(){

    //redirect('/empty'); si no hay productos en el carrito

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito"/>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/**Carrrito */}
            <div className="flex flex-col mt-5">
              <span className="text-xl mb-4 ">Agregar mas items</span>

              <Link href="/" className="mb-5 flex items-center mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out">
              <SlArrowLeftCircle className="w-6 h-6 mr-2" />
              <span>Continua comprando</span>
            </Link>

            {/**Items */}
            {
              productInCart.map(product =>(
                <div key={product.slug} className="flex mb-5">
                  <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  width={100}
                  height={100}
                  style={{
                    width: '100px',
                    height: '100px'
                  }}
                  className="mr-5 rounded"
                  />
                  <div>
                    <p className=" font-semibold">{product.title} </p>
                    <p>${product.price}</p>
                    <QuantitySelector quantity={3}/>
                    <button className="flex items-center bg-transparent hover:bg-red-600 text-red-700 font-semibold hover:text-white py-1 px-2 mt-2 border-transparent hover:border-red-600 rounded">
                    <SlTrash className="w-5 h-5 mr-2"/>
                    Remover
                </button>
                  </div>
                </div>
              ))
            }
            </div>

            {/**Checkout - Resumen de orden*/}
            <div className=" bg-white rounded-xl shadow-xl p-7 flex flex-col items-center justify-center h-fit">
                <h2 className="text-2xl mb-5 font-semibold">Resumen de orden</h2>
                <div className="grid grid-cols-2 gap-y-4 w-full">
                  <span className="font-medium">Nº Productos </span>
                  <span className="text-right">{productInCart.length} articulos</span>

                  <span className="font-medium">Subtotal</span>
                  <span className="text-right">$100 </span>

                  <span className="font-medium">Impuestos (15%) </span>
                  <span className="text-right">$100 articulos</span>

                  <span className="mt-5 text-2xl font-bold">Total:</span>
                  <span className="mt-5 text-2xl text-right font-bold">$100 </span>
                </div>
                <div className="mt-5 mb-3 w-full px-5">
                  <Link
                    href="/checkout/address"
                    className="flex btn-primary justify-center items-center py-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out"
                    >
                    Comprar
                  </Link>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
