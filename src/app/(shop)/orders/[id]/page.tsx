
interface  Props {
    params: {
        id: string;
    }
}

export default function AdminPage({params}: Props){
  return (
    <div>
      <h1>Orden {params.id}</h1>
    </div>
  );
}
