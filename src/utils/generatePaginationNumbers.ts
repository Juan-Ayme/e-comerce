export const generatePaginationNumbers = (currentPage:number, totalPages:number) =>{
    //si el numero total de paginas es 7 o menos
    //vamos a mostrar las paginas sin puntos suspensivos
    if(totalPages <= 7){
        return Array.from({length: totalPages},(_,i)=>i+1) // [1,2,3,4,5,6,7]
    }

    //si la pagina actual esta entre las primeras 3 paginas
    //mostramos las primeras 3, puntos suspensivos, y las ultimas 2
    if(currentPage <= 3){
        return [1,2,3,'...',totalPages-1,totalPages]; // [1,2,3,'...',6,7]
    }

    //Si la pagina actal esta entre las ultimas 3 paginas
    //mostrar las primeras 2, puntos suspensivos, y las ultimas 3 paginas
    if(currentPage >= totalPages - 2){
        return [1,2,'...',totalPages-2,totalPages-1,totalPages]; // [1,2,'...',5,6,7]
    }

    //Si la pagina actual esta entre en otro lugar medio
    //mostrar la primera pagina, puntos suspensivos, la pagina actual, puntos suspensivos, y la ultima pagina

    return [1,'...',currentPage-1,currentPage,currentPage+1,'...',totalPages]; // [1,'...',3,4,5,'...',7]
}
