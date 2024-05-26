import { ProductGrid, Title} from "@/components";

import {getPaginatedProductsWithImages} from "@/actions";
import {initialData} from "@/seed/seed";

//const products = initialData.products; // obtiene los productos de la semilla del archivo seed.ts


interface Props{
    searchParams:{
        page?: string;
    }
}

export default async function Home({searchParams}:Props) {

    const page = searchParams.page ? parseInt(searchParams.page): 1;

    const { products }  = await getPaginatedProductsWithImages({page});

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
