import { Campaign, Interaction, User } from '@/types'
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
const interactionRef = collection(db, 'interactions')

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
  if (!id) return
  const docRef = doc(db, 'users', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return null
  }
}
const updateOrCreateUser = async (id: string, data: User) => {
  if (!id) return
  const docRef = doc(db, 'users', id)

  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    await updateDoc(docRef, { ...data, id })
  } else {
    await setDoc(docRef, { ...data, id })
  }
}

const addInteraction = async (data: Interaction) => {
  await addDoc(interactionRef, {
    ...data,
    donationAmount: Number(data.donationAmount),
  })
}
const getAllInteractions = async () => {
  const q = query(interactionRef, orderBy('donationAmount', 'desc'))
  const donationsSnapshot = await getDocs(q)
  let data: Interaction[] = []
  donationsSnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
  return data
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
  addInteraction,
  getAllInteractions,
}
