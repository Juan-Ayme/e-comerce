import { titleFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"

export const PageNotFound = () => {
return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
        <div className="text-center px-5 mx-5">
            <p className="font-semibold text-xl">Whooops! lo sentimos mucho</p>
            <p className="font-light ">
                <span>Puedes regresar al </span>
                <Link href="/" className="hover:underline transition-all font-bold">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-e-2xl">
                        Inicio
                    </button>
                </Link>
            </p>
        </div>
        <div className="px-2 mx-2">
            <Image
                        alt="404"
                        src="/imgs/404-pontificia.png"
                        className="p-1 sm:p-0"
                        width={450}
                        height={450}
                    />
        </div>
    </div>
);
}
