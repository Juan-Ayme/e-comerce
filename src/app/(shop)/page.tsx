import { ProductGrid, Title} from "@/components";

import {getPaginatedProductsWithImages} from "@/actions";
import {initialData} from "@/seed/seed";

//const products = initialData.products; // obtiene los productos de la semilla del archivo seed.ts


export default async function Home() {


  const { products }  = await getPaginatedProductsWithImages();

  console.log(products)
  return (
      <div >
          <Title
              title="Tienda"
              subtitle="Todos los productos"
          />
          <ProductGrid
              products={products}
          />
      </div>
  );
}
