import { useState } from "react";
import { AddCategory, GifGrid} from "./Components";
export const GifExpertApp = () => {
  // los hooks no se agregan dentro de condiciones
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (NewCategory) => {
    // obtenemos categorias agregamos los tres puntos al inicio
    // liego la coma y asi concatenamos la categoria
    // console.log(NewCategory)
    if (categories.includes(NewCategory)) return;
    setCategories([...categories, NewCategory]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GitExpertApp</h1>

      {/* input */}

      <AddCategory
        //setCategories={ setCategories }
        // el on se usa para cuando uno emita algo
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* listado de Gif */}
        {categories.map((category) => (
          <GifGrid key={ category } category={ category }/>
        ))}
    </>
  );
};
