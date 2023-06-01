// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBaWfeiC5HVWVhx-oknWQYU8lBvoWK597g',
  authDomain: 'trac-trace.firebaseapp.com',
  databaseURL: 'https://trac-trace.firebaseio.com',
  projectId: 'trac-trace',
  storageBucket: 'trac-trace.appspot.com',
  messagingSenderId: '667599813077',
  appId: '1:667599813077:web:739fe07143940152c0e55c',
  measurementId: 'G-F9YWBL3Z52',
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
    .then((res) => {
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
    const url = await getDownloadURL(res.ref)
    console.log({ url })
    return url
  } catch (error) {
    console.log('error', error)
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
