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
const modelRef = collection(db, 'model')

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
const getAllUsers = async () => {
  const q = query(userRef)
  const donationsSnapshot = await getDocs(q)
  let data: any = []
  donationsSnapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }))
  return data
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

const saveModelToDb = async (data: any) => {
  await addDoc(modelRef, {
    ...data,
    createdAt: serverTimestamp(),
  })
}

const getModelFromDb = async () => {
  // const docRef = doc(db, 'model', 'model')
  // const docSnap = await getDoc(docRef)

  // if (docSnap.exists()) {
  //   console.log('Document data:', docSnap.data())
  //   return docSnap.data()
  // } else {
  //   return null
  // }

  const modelRef = collection(db, 'model')
const modelRefsnap = await getDocs(modelRef);
const model = modelRefsnap.docs.map((doc) =>doc.data());

if(model) return model;
else return null;



}


const getDonarData = async () =>{

  // Get users data
  
  const usersRef = collection(db,'users');
  const usersSnapshot = await getDocs(usersRef)
  const users = usersSnapshot.docs.map((doc) => doc.data());
  // console.log(users);
  
  // Get fundraisers data
  const fundraisersRef = collection(db,'campaigns');
  const fundraisersSnapshot = await getDocs(fundraisersRef)
  const fundraisers = fundraisersSnapshot.docs.map((doc) => doc.data());
  
  // Get interactions data
  const interactionsRef = collection(db,'interactions');
  const interactionsSnapshot = await getDocs(interactionsRef)
  const interactions = interactionsSnapshot.docs.map((doc) => doc.data());
  
  // Step 2: Combine the data into a single object (donor_data)
  
  const donorData = {
    users,
    fundraisers,
    interactions,
  };
  
  
  // console.log(donorData);
  return donorData;
  
  }





export {
  getDonarData,
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
  saveModelToDb,
  getAllUsers,
  getModelFromDb,
}
