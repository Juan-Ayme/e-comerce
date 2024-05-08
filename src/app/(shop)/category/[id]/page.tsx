'use client'
import { ProductGrid, Title } from "@/components";
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Category, ValidType } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import {MouseEvent, useState} from "react";

//el props es para recibir los parametros de la url

const seedProducts = initialData.products;

interface Props{
  params:{
    id: Category ;
  }
}

interface Position {
  x: number;
  y: number;
}

export default function AdminPage({params}:Props,position:Position) {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  const {id} = params;
  //const selectType:ValidType = 'shirts';// tipo de producto
  const [selectTypes, setSelectTypes] = useState<ValidType[]>([]); // Cambia a un array
  const products = seedProducts.filter(product => product.gender === id && (selectTypes.length === 0 || selectTypes.includes(product.type))); // Ajusta la lógica de filtrado

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
  const typeChange = (type: ValidType) => { // Ajusta la lógica de manejo de cambios
    setSelectTypes(prevTypes =>
      prevTypes.includes(type)//Comprueba si el tipo ya está seleccionado (truo o false)
      ? prevTypes.filter(t => t !== type)//(true) Si el tipo ya está seleccionado, lo elimina del array de selección o lo excluye del filtro
      : [...prevTypes, type]//(false)Si no está seleccionado, lo añade al array de selección
    );
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <Title
        title={`Articulos de ${titles[id]}`}// se obtendra el genero de acuerdo al id como llave
        subtitle={subtitles[id]}
      />
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mb-2 flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Filtrar por tipo</span>
              <ChevronDownIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-black `}/>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
              <div>
                <input type="checkbox" id="pants" name="type" value="pants" checked={selectTypes.includes('pants')} onChange={() => typeChange('pants')} />
                <label htmlFor="pants" className="px-1">Pantalones</label>
              </div>
              <div>
                <input type="checkbox" id="shirts" name="type" value="shirts" checked={selectTypes.includes('shirts')} onChange={() => typeChange('shirts')} />
                <label htmlFor="shirts" className="px-1">Camisas</label>
              </div>
              <div>
                <input type="checkbox" id="hoodies" name="type" value="hoodies" checked={selectTypes.includes('hoodies')} onChange={() => typeChange('hoodies')} />
                <label htmlFor="hoodies" className="px-1">Sudaderas</label>
              </div>
              <div  >
                <input type="checkbox" id="hats" name="type" value="hats" checked={selectTypes.includes('hats')} onChange={() => typeChange('hats')} />
                <label htmlFor="hats" className="px-1">Sombreros</label>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <ProductGrid
        products={products}
        mousePosition={mousePosition}
      />
    </div>
  );
}
