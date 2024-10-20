import React from 'react'
import './ImageContainer.css'
export const ImageContainer = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems:'center',
      justifyContent:'center',
      padding: '20px',
      textAlign: 'center',
      borderRadius: '8px' /* Exemplo de outra propriedade com string */
    }}>
     <img src="../../assets/images/images.jpeg" className='image-con'/>
     
    </div>
  )
}