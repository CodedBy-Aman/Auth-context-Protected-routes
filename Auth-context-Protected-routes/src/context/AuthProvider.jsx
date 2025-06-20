import { Children, useState } from "react";
import { AuthContext } from "./AuthContext";



const AuthProvider = () =>{
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const login = () => setIsLoggedIn(true);
 const logOut = () => setIsLoggedIn(false);


 return(
    <AuthContext.Provider value={{isLoggedIn, login, logOut }} >
        {Children}
    </AuthContext.Provider>
 )
}

export default AuthProvider;