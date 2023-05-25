import { db, signInAsAdmin, auth, uploadImage } from './config'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
  updateDoc,
  getDoc,
} from 'firebase/firestore'

const messagesRef = collection(db, 'messages')
const productsRef = collection(db, 'products')

const getAllMessages = async () => {
  const q = query(messagesRef, orderBy('timestamp', 'desc'))
  const messagesSnapshot = await getDocs(q)
  let data = []
  messagesSnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
  return data
}

const storeMessage = (data: any) => {
  return addDoc(messagesRef, {
    ...data,
    status: 'new',
    timestamp: serverTimestamp(),
  })
}
const markMessageAsRead = (id: string) => {
  const messageRef = doc(db, 'messages', id)

  return updateDoc(messageRef, {
    status: 'read',
  })
}
const markMessageAsUnread = (id) => {
  const messageRef = doc(db, 'messages', id)

  return updateDoc(messageRef, {
    status: 'new',
  })
}
const getAllProducts = async () => {
  const q = query(productsRef)
  const productsSnapshot = await getDocs(q)
  let data = []
  productsSnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
  return data
}
const storeProduct = async (data) => addDoc(productsRef, data)
const getProductById = async (id) => {
  const docRef = doc(db, 'products', id)
  const docSnap = await getDoc(docRef)
  return { id, ...docSnap.data() }
}
const deleteProduct = async (id) => {
  deleteDoc(doc(db, 'products', id))
}
const deleteMessage = async (id) => {
  deleteDoc(doc(db, 'messages', id))
}

const saveEmail = async (email) =>
  addDoc(collection(db, 'newsletter'), { email })
export {
  getAllMessages,
  storeMessage,
  deleteMessage,
  messagesRef,
  signInAsAdmin,
  auth,
  uploadImage,
  getAllProducts,
  storeProduct,
  getProductById,
  deleteProduct,
  markMessageAsRead,
  markMessageAsUnread,
  saveEmail,
}
