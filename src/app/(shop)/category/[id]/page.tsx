import { notFound } from "next/navigation";

//el props es para recibir los parametros de la url
interface Props{
  params:{
    id:string;
  }
}

export default function AdminPage({params}:Props){
  const {id} = params;
  // esto es para que si el id no es un men o women
  if(id!== 'men' && id !=='women'){
    notFound();
  }

  return (
    <div>
      <h1>Category Page {id} </h1>
    </div>
  );
}