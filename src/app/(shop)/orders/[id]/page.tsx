import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { SlArrowLeftCircle} from "react-icons/sl";
import clsx from "clsx";
import {IoCardOutline} from "react-icons/io5";

const productInCart =[
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

interface Props {
    params:{
        id: string; // por que id por es el argumento que le di o el nombre de la carpeta
    }
}


export default function AdminPage({params}: Props){

    const {id} = params;
    //Todo: verificar
    //redirect(/) si no existe la orden o es otra eprsona
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

            <div className="flex flex-col w-[1000px]">
                <Title title={`Order #${id}`}/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

                    {/**Carrrito */}
                    <div className="flex flex-col mt-5">

                        <div className={
                            clsx(
                                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                {
                                    'bg-red-500':false,//pendiente de pago
                                    'bg-green-700':true,//pagado
                                }
                            )
                        }>
                            <IoCardOutline size={30}/>
                            <span className="mx-2"> Pagado</span>
                        </div>

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
                            <div className={
                                clsx(
                                    "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                                    {
                                        'bg-red-500': false,//pendiente de pago
                                        'bg-green-700': true,//pagado
                                    }
                                )
                            }>
                                <IoCardOutline size={30}/>
                                <span className="mx-2"> Pagado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
