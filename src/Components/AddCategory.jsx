import { useState } from "react";


// aca tenemos que importar lo que vamos a usar
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");
  // con el target es para reducir codigo y no agregar event.target
  // desestructurando
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(inputValue.trim().length <= 1) return;

    //nos permite guardar lo de las categorias y usarlo aca para concatenar
    // setCategories( (categories) => [ inputValue, ...categories ]);

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
