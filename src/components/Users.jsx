import { Component } from "react";

class Users extends Component {
    constructor (props){
        super (props);
        this.state = {
            users: []
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
            users: data.data
        })
    };
    componentDidMount() {
        this.getAllUsers('http://localhost:3000/users',this.info)
    }
    render(){
        return(
            <div className="totales">
            <div className="users">
                <h2>Users</h2>
                <p> Cantidad de Usuarios: {this.state.users.length}</p>
                <i className="fa-solid fa-user"></i>
            </div>
            
            </div>
        )
    }
    
}   
 export default Users;
