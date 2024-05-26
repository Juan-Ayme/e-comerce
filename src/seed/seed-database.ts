import { initialData} from "./seed";
import prisma from "../lib/prisma";

async function main(){

    // 1. borrar todos los datos de la base de datos
    
        await prisma.productImage.deleteMany();
        await prisma.product.deleteMany();
        await prisma.category.deleteMany();

    const {categories,products} = initialData;
    //Categorias
    const categoriesData = categories.map(category =>({
        name:category
    }));

    // 2. Crear las categorias
    await prisma.category.createMany({
        data:categoriesData
    });

    // 3. Obtener las categorias de la base de datos
    const categoriesDB = await prisma.category.findMany();

    // 4. Crear un mapa de categorias
    const categoriesMap =  categoriesDB.reduce((map,category)=>{

        map[category.name.toLowerCase()] = category.id;

        return map;
    },{} as Record<string, string>); // <string = shirt , string = categoryID>


    const {images,type,...producto1} = products[0];

    for (const product of products) {//products es un array de productos

        const {type,images,...rest} = product; //rest es un objeto con todas las propiedades del producto menos type e images

        const dbProduct = await prisma.product.create({// se crea un producto en la base de datos
            data:{
                ...rest,
                categoryId: categoriesMap[type]
            }
        })

        // 5. Imagenes de productos
        const imagesData = images.map(image =>({
            url:image,
            productoId: dbProduct.id
        }));

        await prisma.productImage.createMany({
            data: imagesData
        });
        
    }
    };


main().catch(err => {
    console.error("Error ejecutando el seed:", err);
});

(()=>{
    if (process.env.NODE_ENV === 'production') return;
    main();
});
