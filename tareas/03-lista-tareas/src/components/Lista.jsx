import React, { useState } from "react";

export const Lista = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const arr = tareas;
    arr.push(tarea);
    setTareas(arr);
    setTarea('');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center my-5">
      <form className="d-flex flex-column w-50" onSubmit={handleSubmit}>
        <label>Escriba una tarea</label>
        <input type="text" onChange={e => setTarea(e.target.value)} value={tarea} />
        <button type="submit" className="btn btn-primary m-4">
          Agregar
        </button>
      </form>
      <ul>
          {tareas.map((tarea, index) => (<li key={index}>{tarea}</li> ) )}
      </ul>
    </div>
  );
};
