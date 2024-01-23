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
            users: data
        })
    };
    componentWillMount() {
        this.getAllUsers('https://jsonplaceholder.typicode.com/users',this.info)
    }
    render(){
        return(
            <div className="users">
                <h2>Users</h2>
                <p> Cantidad de Usuarios: {this.state.users.length}</p>
                {
                    this.state.users && this.state.users?.map((user, i) =>{
                        return (<>
                            <div className="users-json">
                                <li key={i}>
                                <p className="data-users">Id: {user.id}</p>
                                <p className="data-users">Nombre: {user.name}</p>
                                <p className="data-users">Email: {user.email}</p>
                                </li>
                            
                            </div>
                            </>
                        )

                    })
                }


            </div>


        )
    }
    
}   
 export default Users;
