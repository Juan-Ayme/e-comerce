import { Title } from '@/components';
import Link from 'next/link';

export default function NamePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

<div className="w-full xl:w-[1000px] bg-white rounded-lg shadow-lg p-5">

  <Title title="Dirección" subtitle="Dirección de entrega" />

  <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Nombres</span>
      <input
        type="text"
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Apellidos</span>
      <input 
        type="text" 
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Dirección</span>
      <input 
        type="text" 
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Dirección 2 (opcional)</span>
      <input 
        type="text" 
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Código postal</span>
      <input 
        type="text" 
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Ciudad</span>
      <input 
        type="text" 
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">País</span>
      <select 
        className="p-2 border rounded-md bg-white shadow-inner"
      >
        <option value="">[ Seleccione ]</option>
        <option value="CRI">Costa Rica</option>
      </select>
    </div>

    <div className="flex flex-col mb-4">
      <span className="font-semibold text-gray-700">Teléfono</span>
      <input 
        type="text" 
        className="p-2 border rounded-md bg-white shadow-inner"
      />
    </div>
    <div className="flex flex-col mb-4 sm:mt-10">
      <Link 
        href='/checkout'
        className="btn-primary flex w-full sm:w-1/2 justify-center items-center py-2 rounded text-white bg-blue-500 hover:bg-blue-700 transition duration-500 ease-in-out"
      >
        Siguiente
      </Link>
    </div>
  </div>
</div>
</div>
  );
}