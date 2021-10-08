import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
    const [identifier, setIdentifier] = useState(1);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUser = async () => {
        setLoading(true);
        try {
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);

            setUsers(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(true);
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUser();
    }, [identifier]);

    return (
        <div>
            <input type="text" name="identifier" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
            {
                loading ? <div>loading...</div> :
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>{users.website}</td>
                                <td>{users.phone}</td>
                            </tr>
                            {/* {
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                </tr>
              );
            })
          } */}
                        </tbody>
                    </table>
            }
        </div>
    );
}

export default App;