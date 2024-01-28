import React from "react";

const LastProduct = () => {
    const [productLast, setproductLast] = React.useState([])
    
    React.useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch("http://localhost:3000/products")
        const products = await data.json()
        const lastProduct = products.data[products.data.length - 1]
        setproductLast(lastProduct);
    }
    const imgUrl = 'http://localhost:3001/img/products/' + productLast.image;
    return (
        <>
        <div className="lastProduct">
        <p className="title-lastProduct">Ultimo producto creado</p>
            <div className="info-lastProduct">
            <img src = {imgUrl} width="100%" alt=""/>
            <p> Nombre : {productLast.name}</p>
            <p> Descripción : {productLast.description}</p>
            <p> Precio : $ {productLast.price}</p>
            <p> Category : {productLast.idcategory}</p>
            </div>
            </div>
        </>     
    )
}
 export default LastProduct;

