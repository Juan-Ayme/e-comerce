import { initialData} from "./seed";
import prisma from "../lib/prisma";

async function main(){

    // 1. borrar todos los datos de la base de datos
    await Promise.all([
        await prisma.productImage.deleteMany(),
        await prisma.product.deleteMany(),
        await prisma.category.deleteMany(),
        ]
    )
    console.log("Seed ejecutado correctamente");
}

main().catch(err => {
    console.error("Error ejecutando el seed:", err);
});

(()=>{
    if (process.env.NODE_ENV === 'production') return;
    main();
});
