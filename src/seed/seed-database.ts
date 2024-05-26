import { initialData} from "./seed";
import prisma from "../lib/prisma";

async function main(){

    // 1. borrar todos los datos de la base de datos
    await Promise.all([
        await prisma.productImage.deleteMany(),
        await prisma.product.deleteMany(),
        await prisma.category.deleteMany(),
        ]
    );

    const {categories,products} = initialData;
    //Categorias
    const categoriesData = categories.map(category =>({
        name:category
    }));

    // 2. Crear las categorias
    await prisma.category.createMany({
        data:categoriesData
    });

    const categoriesDB = await prisma.category.findMany();

    const categoriesMap =  categoriesDB.reduce((map,category)=>{

        map[category.name.toLowerCase()] = category.id;

        return map;
    },{} as Record<string, string>); // <string = shirt , string = categoryID>
    console.log(categoriesMap);
}

main().catch(err => {
    console.error("Error ejecutando el seed:", err);
});

(()=>{
    if (process.env.NODE_ENV === 'production') return;
    main();
});
