import React from "react";

const Asincronismo = () => {
    //Promesas

  // const validacion = true

  // const promesaValidacion=()=>{
  //     return new Promise((resolve, reject)=>{
  //         setTimeout(()=>{
  //             if(validacion){
  //                 resolve('Todo salió bien 😀')
  //             }else{
  //                 reject('No llegó nada 😔')
  //             }
  //         },2000)
  //     })
  // }

  //Estructura básica de petición de Fetch (No vamos a usar esta)
  //   fetch(
  //     "https://www.superheroapi.com/api.php/10220302563893806/search/superman")
  //     .then((response) => response.json())
  //     //Desestructuro el objeto para sacar solo los resultados
  //     .then(({results}) => console.log(results))
  //     .catch((error) => console.log(error));

  //Simplificar el fetch (Esta estructura es la que usaremos)
  //Async await
  const getHeroe = async () => {
    //Espere hasta que fetch resuelva esto
    const resp = await fetch(
      "https://www.superheroapi.com/api.php/10220302563893806/search/superman"
    );
    const data = await resp.json();
    console.log(data.results);
  };

  getHeroe();

  // promesaValidacion()
  // .then((respuesta) => console.log(respuesta))
  // .catch((error) => console.warn(error));

  return (
    <div>
      <h1>Asincronismo en JavaScript</h1>
    </div>
  );
};

export default Asincronismo;
