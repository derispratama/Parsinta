import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Show() {
    let { identifier } = useParams();

    const [user, setUser] = useState([]);

    const getUser = async () => {
        try {
            let response = await axios.get('http://jsonplaceholder.typicode.com/users/' + identifier);

            setUser(response.data);
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getUser()
    }, [identifier])

    return (
        <div>
            <table border="1">
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            </table>
        </div>
    );
}

export default Show;