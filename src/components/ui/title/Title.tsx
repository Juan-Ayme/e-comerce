import { titleFont } from "@/config/fonts";

interface Props{
    title: string;
    subtitle?: string;
    className?: string;
}
//se utiliza en la pagina de producto de cada genero o de acuerdo a la categoria de la tienda
export const Title = ({title,subtitle,className}: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
        <h1 className={`${titleFont.className} antialiased text-4xl font-semibold my-10`}>
            {title}
        </h1>
        {//si hay un subtitulo lo mostramos
            subtitle && (
                <h3 className="text-xl mb-10">{subtitle}</h3>
            )
        }
    </div>
  )
}
