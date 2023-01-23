import React from 'react'



const nuevoSaludo = (a,b) =>{
    return a + b;
}



export const FirstApp = () => {
  return (
    <>
    <h1>{nuevoSaludo(1,2)}</h1>
    <div>FirstApp</div>
    </>
    
  )
}
