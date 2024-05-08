import {IoCardOutline} from "react-icons/io5";
import Link from "next/link";
import {CiShoppingCart} from "react-icons/ci";

export default function AdminPage(){
  return (
    <div className="flex justify-center items-center  h-[800px] ">
        <CiShoppingCart size={100} className="mx-5"/>

        <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">
                Tu carrito esta vacio
            </h1>

            <Link
                href="/"
                className="text-blue-600 mt-2 text-4xl"
            >
                Regresar
            </Link>
        </div>
    </div>
  );
}
