import {Pagination, ProductGrid, Title} from "@/components";

import {getPaginatedProductsWithImages} from "@/actions";
import {initialData} from "@/seed/seed";
import {redirect} from "next/navigation";

//const products = initialData.products; // obtiene los productos de la semilla del archivo seed.ts


interface Props{
    searchParams:{
        page?: string;
    }
}

export default async function Home({searchParams}:Props) {

    const page = searchParams.page ? parseInt(searchParams.page): 1;

    const { products ,currentPage,totalPages}  = await getPaginatedProductsWithImages({page});

    console.log(currentPage,totalPages)

    if (products.length === 0){
        redirect('/');
    }
    return (
        <div >
            <Title
                title="Tienda"
                subtitle="Todos los productos"
            />
            <ProductGrid
                products={products}
            />
            <Pagination
                totalPages={totalPages}
            />
        </div>
    );
}
