import { Component } from "react";


class Products extends Component {
    constructor (props){
        super (props);
        this.state = {
            productos: ""
        }
    }
    getAllUsers(url, handle){
        try{
            fetch(url)
            .then(response => response.json())
            .then(json => handle(json))
            .catch(error => console.error(error))
        } catch (error){
            console.log(error)
        }
    }
    componentDidMount() {
        this.getAllUsers('http://localhost:3000/products',this.info)
    }
    info = (data) => {
        this.setState({
            productos: data.data
        })
    };
    render(){
        return(
            <div className="totales">
            <div className="products">
                <h2>Productos</h2>
                <p> Cantidad de Productos: {this.state.productos.length}</p>
                <i className="fa-solid fa-burger"></i>
            </div>
            </div>
        )
    }
    
}  
 export default Products;
