
import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types'


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);


  return (
    <>
      <h3> {category} </h3>

      {/* Para poder definir la logica de que hacer si una imagen carga o no */}
      {/* Si isLoading esta en TRUE entonces Dibujar Cargando... */}
      {
        isLoading && <h1>Cargando...</h1>
      }

      <div className='card-grid'>
        {

          images.map((image) => (
            <GifItem key={image.id}
              {...image} />
          ))

        }
      </div>

    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}