import React, { useState, useContext } from "react";
import PropTypes from 'prop-types'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){

    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn, 
        setIsLoggedIn,
        isAdmin,
        setIsAdmin
    }

    return (
        <AuthContext.Provider value = {value}> {props.children} </AuthContext.Provider>
    )
}

AuthProvider.propTypes = { children: PropTypes.node.isRequired }