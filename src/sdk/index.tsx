// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { getNativeSelectUtilityClasses } from '@mui/material'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDZBgbq_B5hGsLYlS0mgnkE-tPpNlh9yGQ',
    authDomain: 'humor-37624.firebaseapp.com',
    projectId: 'humor-37624',
    storageBucket: 'humor-37624.appspot.com',
    messagingSenderId: '309938964995',
    appId: '1:309938964995:web:81bba8de7ce2f866261c36',
    measurementId: 'G-99XT1M7PR7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)

export const signupUser = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            // ..
        })
}

export const loginUser = async (email: string, password: string) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        return user.user
    } catch (error) {
        throw error
    }
}

export const getUserTokenFirebase = (): string | null => {
    let token = null

    const unSubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
            token = await user.getIdToken(true)

            return token
        } else {
            localStorage.clear()
        }
    })

    unSubscribe()
    return token
}
