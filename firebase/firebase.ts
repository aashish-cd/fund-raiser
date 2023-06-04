import { Campaign, User } from '@/types'
import {
  db,
  auth,
  uploadImage,
  signInWithEmailPassword,
  signUpWithEmailPassword,
  signInWithGoogle,
} from './config'
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
  setDoc,
} from 'firebase/firestore'

const campaignRef = collection(db, 'campaigns')
const userRef = collection(db, 'users')

const getAllDonations = async () => {
  const q = query(campaignRef, orderBy('createdAt', 'desc'))
  const donationsSnapshot = await getDocs(q)
  let data: Campaign[] = []
  donationsSnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
  return data
}
const storeDonation = async (data: Campaign) =>
  addDoc(campaignRef, { ...data, createdAt: new Date() })
const deleteDonation = async (id: string) => {
  deleteDoc(doc(db, 'campaigns', id))
}
const editDonation = async (id: string, data: Campaign) => {
  const docRef = doc(db, 'campaigns', id)
  await updateDoc(docRef, { ...data, isVerified: true })
}

const getUser = async (id: string) => {
  const docRef = doc(db, 'users', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}
const updateOrCreateUser = async (id: string, data: User) => {
  const docRef = doc(db, 'users', id)

  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    await updateDoc(docRef, { ...data, id })
  } else {
    await setDoc(docRef, { ...data, id })
  }
}

export {
  getAllDonations,
  storeDonation,
  deleteDonation,
  editDonation,
  auth,
  uploadImage,
  signInWithGoogle,
  signInWithEmailPassword,
  signUpWithEmailPassword,
  getUser,
  updateOrCreateUser,
}
