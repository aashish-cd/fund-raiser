// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

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
const signInAsAdmin = ({
  email,
  password,
}: {
  email: string
  password: string
}) => signInWithEmailAndPassword(auth, email, password)

const storage = getStorage()
// 'file' comes from the Blob or File API
const uploadImage = async (file: any) => {
  const fileName = Date.now().toString()
  console.log(file.name)
  const storageRef = ref(
    storage,
    `product-images/${fileName}.${file.name.split('.'[1])}`
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

export { db, signInAsAdmin, auth, uploadImage }
