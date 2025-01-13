import { useAuth } from "../assets/Context/AuthContext"
import { useState, useEffect} from 'react';
import userInfoService from '../services/userInfoService';

const UserInfo = () => {

    const { authUser, setAuthUser } = useAuth();
    const  [loading, setLoading] = useState(true);

    useEffect(() =>{

        const fetchUserInfo = async () => {

            const token = localStorage.getItem('token');

            if(token){
                
                
                const request = await userInfoService.getUserInfo(token);
                setAuthUser(request.user);
                setLoading(false);


            } else {
                setLoading(false);
            }
        } 

        fetchUserInfo();
    }, [setAuthUser])


    return ( 
        <div> 
            <h1>Información del Usuario</h1> 
            <p>ID del Usuario: {authUser.idUsuario}</p> 
            <p>Email: {authUser.correo}</p> 
            <p>Username: {authUser.username}</p> 
        </div> 
    );
}

export default UserInfo