import React from 'react'
interface TarjetaProps{
    titulo: string;
    descripcion: string;
    urlImage?: string;
    favorite?: boolean;
}

// tarjeta renderiza o simula una card donde si la tarjeta tiene la propiedad favorite tendra un estilo especial y una estrella de favorita, en caso contrario no tendra ese estilo
const Tarjeta = ({titulo,descripcion,urlImage,favorite=false}: TarjetaProps) => {
  return (
// renderizado condicional
    <div className={`rounded-lg shadow-md p-6 ${favorite ? 'bg-amber-200 border-amber-700 border-2' : 'bg-white'}`}>
        {urlImage && (
            <img 
            src={urlImage} 
            alt={titulo} 
            className="w-full h-48 object-cover mb-4 rounded-md" 
        />)}
        <h3 className="text-xl font-bold mb-2">
            {titulo}
        </h3>
        <p className='text-gray-600'>
            {descripcion}
        </p>
        {favorite && (
            <span className=" text-2xl text-amber-500">★</span>
        )}
    </div>
  )
}

export default Tarjeta