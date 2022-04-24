import React, { useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import "../firebase";

const AuthContext = React.createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    // const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        return onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // setLoading(false);
        });l
    }, []);

    const signup = async (email, password, userName) => {
        const auth = getAuth();

        await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(auth.currentUser, {
            displayName: userName,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    };

    const login = (email, password) => {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        const auth = getAuth();
        return signOut(auth);
    };

    const value = {
        currentUser,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
