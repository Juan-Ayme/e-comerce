import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products; // obtiene los productos de la semilla del archivo seed.ts

export default function Home() {
  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
      />
      <ProductGrid
        products={products}
      />
    </>
  );
}
