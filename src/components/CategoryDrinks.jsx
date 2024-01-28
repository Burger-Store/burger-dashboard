import React from "react";

const CategoryDrinks = () => {
  const [categoryburgers, setCategoryDrinks] = React.useState([]);
  const [totalIdCategory2, setTotalIdCategory2] = React.useState(0);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () =>{
      const data = await fetch("http://localhost:3000/products");
      const category = await data.json();
      const products = category.data;
      setCategoryDrinks(products);

      const idCategory2 = products.filter((product) => product.idcategory === 2);
      setTotalIdCategory2(idCategory2.length);
  };
  return (
    <>
       <div className="totales">
            <div className="idCategory">
                <h2>Bebidas</h2>
                <p> Cantidad de Productos: {totalIdCategory2}</p>
            </div>
            </div>
    </>
  );
};

export default CategoryDrinks;
