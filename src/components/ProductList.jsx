import React from "react";

const ProductList = () => {
    const [productsList, setproductsList] = React.useState([])
    
    React.useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch('http://localhost:3000/products')
        const products = await data.json()
        setproductsList(products.data)
    }
    return ( 
    <table className="list">
            <thead>
                <tr>
                    <th >Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Productos Id</th>
                </tr>
                </thead>
                <tbody>
        {productsList.map(product=>(
                        <tr key={product.idproducts} >
                        <td className="list-id">{product.idproducts}</td>
                        <td  className="list-id">{product.name}</td>
                        <td className="list-id">{product.description}</td>
                        <td className="list-id">{product.price}</td>
                        <td className="list-id">{product.idcategory}</td>
                    </tr>
                    ))


                }
                </tbody>
        </table>
     
        
    )
}
 export default ProductList;

