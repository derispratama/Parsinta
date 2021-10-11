import React, { Component, useContext } from 'react';
import { UserContext } from '../views/context/User';


function AuthenticatedUser() {
    const {user,loading} = useContext(UserContext)
    return(
        <div>
            {
                loading ? <div>loading..</div> 
                :
            <div>{user.name}</div>
            }
        </div>
    );
}

export default AuthenticatedUser;