import { Product } from "@/interfaces";
import { ProductGridItem } from "./ProductGridItem";

interface Props{
    products: Product[];// arreglo de productos
}
/**
 * Componente que muestra los productos en forma de grid o cuadricula
 */
export const ProductGrid = ({products}:Props) => {
    // retorna un grid con los productos
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
        {
            products.map(product =>(
                <ProductGridItem
                 key={product.slug}
                 product={product}
                />
            ))
        }
    </div>
  )
}
