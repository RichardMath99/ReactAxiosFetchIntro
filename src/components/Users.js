import React, { useEffect,useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const url = 'http://localhost:3001/list/users/';

  function callApiAxios() {
    axios
    .get(url)
    .then((response) => setUsers(response.data.users)
    ).catch(err => {
      console.log('error', err)
    });
  }

  function callApiFetch() {
    fetch(url).then(res => res.json() ).then(data => {
      setUsers(data.users)
    }).catch(err => {
      console.log('error', err)
    });
  }

  useEffect(() => {
    callApiFetch();
    //callApiAxios();
  }, []);

  return (
    <div className="container-users">
      <div className="list-users">
        Lista de Usuários
      </div>

      <ul className="users">
        {users.map((element, index) => (
          <li className="user" key={element.id}>
            <h4>{index+1}. {element.first_name}</h4>
            <p>{element.email}</p>
          </li>
        ))}
      </ul>
    </div>  
  );
}

export default Users;