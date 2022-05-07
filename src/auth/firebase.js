import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { successToastify, warningToastify } from "../utils/toastify";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
    try {
        let userCredential = await createUserWithEmailAndPassword(auth, email, password);
        navigate('/');
        successToastify('Successfully Register');
        await updateProfile(auth.currentUser, {
            displayName: displayName
        });
        successToastify('Successfully Register');
        console.log(userCredential);
    } catch (err) {
        warningToastify('Something went wrong!')
    }
};

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
        successToastify('Successfully Logged In');
        console.log(userCredential);
    } catch (error) {
        warningToastify('Something went wrong!');
    }
};

export const logOut = () => {
    signOut(auth);
    successToastify('Logged Out Successfully');
}

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setCurrentUser(currentUser)
        } else {
            setCurrentUser(false)
        };
    })
};

export const signUpGoogle = (navigate) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            navigate('/')
            successToastify('Successfully Logged In');
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });

}