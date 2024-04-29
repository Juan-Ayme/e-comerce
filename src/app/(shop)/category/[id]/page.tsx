import { ProductGrid, Title } from "@/components";
import { Category, ValidType } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

//el props es para recibir los parametros de la url

const seedProducts = initialData.products;

interface Props{
  params:{
    id: Category ;
  }
}

export default function AdminPage({params}:Props){

  const {id} = params;
  //const selectType:ValidType = 'shirts';// tipo de producto
  const products = seedProducts.filter(product => product.gender === id);// filtra los productos por genero
  //console.log(products);
  //console.log(selectType);

  const titles:Record<Category,string> = {
    'men':'Hombres',
    'women':'Mujeres',
    'unisex':'Todos'
  }

  const subtitles:Record<Category,string> = {
    'men':'Ropa para Enfermeros estudiantes',
    'women':'Ropa para Enfermeras estudiantes',
    'unisex':'Ropa para Enfermeros y Enfermeras estudiantes'
    }
  // esto es para que si el id no es un men o women
  if(id!== 'men' && id !=='women'){
    notFound();
  }

  return (
    <>
      <Title
        title={`Articulos de ${titles[id]}`}// se obtendra el genero de acuerdo al id como llave
        subtitle={subtitles[id]}
      />
      <ProductGrid
        products={products}
      />
    </>
  );
}