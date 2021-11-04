import React, {useState, useEffect} from "react";
import userDataService from "../services/user"


const UserList = props => {
  const[users,setUsers] = useState([]);

useEffect(()=>{
    retrieveUsers();
},[]);

  const retrieveUsers = () =>{
      userDataService.getAll()
      .then(response => {
          console.log(response.data);
          
          setUsers(response.data.users);
      })
      .catch(e => {
          console.log(e);
      });
  };


return(
    <div>
        
        {users.map((user)=>{
            const name= `${user.name}`;
            return(
                <p>
                  Name : {name}  
                </p>
            )
        })}
    </div>
)

};

export default UserList;