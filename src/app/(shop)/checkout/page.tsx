import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { SlArrowLeftCircle} from "react-icons/sl";

const productInCart =[
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function AdminPage(){
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">
                <Title title="Verificar Orden"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {/**Carrrito */}
                    <div className="flex flex-col mt-5">
                        <span className="text-xl mb-4 ">Ajustar elemento</span>

                        <Link href="/cart" className="mb-5 flex items-center mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-500 ease-in-out">
                            <SlArrowLeftCircle className="w-6 h-6 mr-2" />
                            <span>Editar carrito aqui</span>
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
                                        <p>${product.price} x 3 </p>
                                        <p className="font-bold">Subtotal: ${product.price *3} </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/**Checkout - Resumen de orden*/}
                    <div className="bg-white rounded-xl shadow-xl p-7 flex flex-col ">

                        <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
                        <div className="mb-10 ">
                            <p className="text-xl">Juan Ayme</p>
                            <p>Av. sol 51</p>
                            <p>Col. Centro</p>
                            <p>Distrito Jesus NZ</p>
                            <p>Ayacuhco</p>
                            <p>CP 05001</p>
                            <p>999595959</p>
                        </div>
                        <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>
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
                        <div className="mt-5 mb-2 w-full">

                            {/*Disclainer*/}
                            <p className="text-xs text-gray-500 mb-5">Al hacer clic en el botón de abajo, aceptas nuestros <Link href="/institution/terms-conditions" className="text-blue-700 underline"
                            >términos y condiciones</Link>  y <Link href="/institution/policy-privacy" className="text-blue-700 underline"
                            >politica de privacidad</Link></p>


                            <Link
                                href="/orders/12356"
                                className="flex btn-primary justify-center items-center py-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out"
                            >
                                Colocar orden
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
