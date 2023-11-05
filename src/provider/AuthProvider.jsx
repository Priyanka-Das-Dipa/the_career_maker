import { createContext } from "react";

export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const asasd ={}
    return (
        <AuthContext.Provider value={asasd}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;