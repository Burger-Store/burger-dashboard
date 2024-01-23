import React from "react";
import { useParams } from "react-router-dom";

const UsersDetail = () =>{

    const {id} = useParams()
    //console.log(id);
    const [usersId, info] = React.useState([])
    
    React.useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async () =>{
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await data.json()
        info(users)
    }
    return(
        <div className="users">   
               <h4 className="data-users">{usersId.name}</h4>
               <h4 className="data-users">{usersId.email}</h4>
               <h4 className="data-users">{usersId.phone}</h4>
        </div>
    )
}
export default UsersDetail