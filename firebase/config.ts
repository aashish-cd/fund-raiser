// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
} from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBkHkEu6dB2ibVW4WOtIidM8nRuXQ3ipnc',
  authDomain: 'fund-6d1df.firebaseapp.com',
  projectId: 'fund-6d1df',
  storageBucket: 'fund-6d1df.appspot.com',
  messagingSenderId: '82905199120',
  appId: '1:82905199120:web:a8f8a12f5a8ddd013d5095',
  measurementId: 'G-FR2Y19S191',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const auth = getAuth(app)

const signInWithEmailPassword = ({
  email,
  password,
}: {
  email: string
  password: string
}) =>
  signInWithEmailAndPassword(auth, email, password).then((user) =>
    console.log({ user })
  )

const signUpWithEmailPassword = ({
  email,
  password,
}: {
  email: string
  password: string
}) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log({ signup: user })
      // ...
    })
    .catch((error) => {
      console.error(error)
      // ..
    })

let google_provider = new GoogleAuthProvider()

const signInWithGoogle = () =>
  signInWithPopup(auth, google_provider)
    .then(async (res) => {
      console.log('google signIn response', res)
    })
    .catch((err) => {
      console.log('google signIn error', err)
    })

const storage = getStorage()
// 'file' comes from the Blob or File API
const uploadImage = async (file: any) => {
  const fileName = Date.now().toString()
  console.log(file.name)
  const storageRef = ref(
    storage,
    `images/${fileName}.${file.name.split('.'[1])}`
  )
  try {
    const res = await uploadBytes(storageRef, file)
    const url: string = await getDownloadURL(res.ref)
    console.log({ url })
    return url
  } catch (error: any) {
    console.log('error', error)
    return error
  }
}

export {
  db,
  auth,
  uploadImage,
  signInWithEmailPassword,
  signUpWithEmailPassword,
  signInWithGoogle,
}
