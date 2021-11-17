import { useEffect, useState } from 'react';
import initializationFirebase from "../Firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, getIdToken, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, signOut } from "firebase/auth";

initializationFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminToken, setAdminToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // handler to register
    const handlerRegisterToEmail = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email: email, displayName: name }
                setUser(newUser);
                saveUser(email, name, 'POST')

                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                setAuthError('')
                navigate('/')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // handler to login with email
    const handlerLoginWithEmail = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    // google sign in
    const handlerToGoogleLogin = (location, navigate) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')
                const destination = location?.state?.from || "/";
                navigate(destination);
                setAuthError('');
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // Logout for email pass
    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
        }).catch((error) => {
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    // save user
    const saveUser = (email, displayName, method) => {
        const users = { email, displayName };
        fetch('https://whispering-garden-01955.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        }).then(res => res.json())
            .then(data => console.log(data))
    }

    // is Admin
    useEffect(() => {
        fetch(`https://whispering-garden-01955.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.admin)
            })
    }, [user.email])

    // onAuthStateChanged
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setAdminToken(idToken)
                    })
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [auth]);

    return {
        user,
        handlerRegisterToEmail,
        handlerLoginWithEmail,
        handlerToGoogleLogin,
        logout,
        adminToken,
        isAdmin,
        authError,
        isLoading,
    }
};

export default useFirebase;