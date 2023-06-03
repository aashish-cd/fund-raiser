import { Campaign } from '@/types'
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
} from 'firebase/firestore'

const campaignRef = collection(db, 'campaigns')

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
}
