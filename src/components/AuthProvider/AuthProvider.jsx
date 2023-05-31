import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)

    const provider = new GoogleAuthProvider()
    const google = () => {
        setLoad(true)
        return signInWithPopup(auth, provider)
    }
    const signUp = (email, pass) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    const signIn = (email, pass) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const out = (email, pass) => {
        setLoad(true)
        localStorage.removeItem('user-token')
        return signOut(auth)
    }
    const varify = u => {
        setLoad(true)
        return sendEmailVerification(u)
    }
    const jwt = u => {
        // setLoad(true)
        const userInfo = { name: u.displayName, email: u.email }
        return fetch('http://localhost:5000/jwt', {
            method: 'POST',
            body: JSON.stringify(userInfo)
        })
    }
    const updt = (u, n, i) => {
        setLoad(true)
        return updateProfile(u, {
            displayName: n, photoURL: i
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoad(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const info = {
        user,
        load,
        signIn,
        signUp,
        out,
        google,
        updt,
        varify,
        jwt
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;