import React from "react";

const CategoryBurger = () =>{
  const [categoryburgers, setCategoryBurgers] = React.useState([]);
  const [totalIdCategory1, setTotalIdCategory1] = React.useState(0);

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () =>{
      const data = await fetch("http://localhost:3000/products");
      const category = await data.json();
      const products = category.data;
      setCategoryBurgers(products);

      const category1 = products.filter((product) => product.idcategory === 1);
      setTotalIdCategory1(category1.length);
  };

  return (
    <>
     <div className="totales">
            <div className="idCategory">
                <h2>Hamburguesas</h2>
                <p> Cantidad de Productos: {totalIdCategory1}</p>
            </div>
            </div>
    </>
  );
};

export default CategoryBurger;
