import React, { Component } from 'react';

function Login() {
    return (
        <div>
            <form>
                <labe>Username</labe>
                <input type="text" name="username" />
                <labe>Password</labe>
                <input type="text" name="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;