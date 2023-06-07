// // import '../../firebase/firebase'

// // const db = firebase.firestore();
// import {db} from '../firebase/config'

// import {
//     collection,
//     addDoc,
//     getDocs,
//     deleteDoc,
//     doc,
//     serverTimestamp,
//     query,
//     orderBy,
//     updateDoc,
//     getDoc,
//     setDoc,
//   } from 'firebase/firestore'


// const getDonarData = async () =>{

// // Get users data

// const usersRef = collection(db,'users');
// const usersSnapshot = await getDocs(usersRef)
// const users = usersSnapshot.docs.map((doc) => doc.data());
// console.log(users);

// // Get fundraisers data
// const fundraisersRef = collection(db,'campaigns');
// const fundraisersSnapshot = await getDocs(fundraisersRef)
// const fundraisers = fundraisersSnapshot.docs.map((doc) => doc.data());

// // Get interactions data
// const interactionsRef = collection(db,'interactions');
// const interactionsSnapshot = await getDocs(interactionsRef)
// const interactions = interactionsSnapshot.docs.map((doc) => doc.data());

// // Step 2: Combine the data into a single object (donor_data)


// const modelRef = collection(db, 'model')
// const modelRefsnap = await getDocs(modelRef);
// const model = modelRefsnap.docs.map((doc) =>doc.data());

// console.log("hello model",model)
// const donorData = [{
//   users,
//   fundraisers,
//   interactions,
// }];


// // console.log(donorData)

// }

// // getDonarData();
