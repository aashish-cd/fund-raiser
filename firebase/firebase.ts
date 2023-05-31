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

const donationsRef = collection(db, 'donations')

const getAllDonations = async () => {
  const q = query(donationsRef, orderBy('createdAt', 'desc'))
  const donationsSnapshot = await getDocs(q)
  let data = [{}]
  donationsSnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
  return data
}
const storeDonation = async (data: {}) =>
  addDoc(donationsRef, { ...data, createdAt: new Date() })
const deleteDonation = async (id: string) => {
  deleteDoc(doc(db, 'donations', id))
}
const editDonation = async (id: string, data: {}) => {
  const docRef = doc(db, 'donations', id)
  await updateDoc(docRef, data)
}

export {
  getAllDonations,
  storeDonation,
  deleteDonation,
  editDonation,
  signInAsAdmin,
  auth,
  uploadImage,
}
