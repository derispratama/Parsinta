import React, { Component, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function Index() {
    const [users, setUsers] = useState([]);

    const getUser = async () => {
        try {
            let response = await axios.get('http://jsonplaceholder.typicode.com/users');

            setUsers(response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <table border="1">
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {
                    users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><NavLink to={`users/${user.id}`}>View Profile</NavLink></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
}

export default Index;