import { Component } from "react";

class Category extends Component {
    constructor (props){
        super (props);
        this.state = {
            categories: []
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
    info = (data) => {
        this.setState({
            categories: data.data
        })
    };
    componentDidMount() {
        this.getAllUsers('http://localhost:3000/products/category',this.info)
    }
    render(){
        return(
            <div className="totales">
            <div className="category">
                <h2>Categorias</h2>
                <p> Cantidad de categorias: {this.state.categories.length}</p>
                <i className="fa-solid fa-list"></i>
            </div>
            </div>
        )
    }
    
}   
 export default Category;
