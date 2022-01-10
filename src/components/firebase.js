import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyCKe_YvIXCKnKyCPRxWCej8B_q2e_XX8to",
  authDomain: "nss-portal.firebaseapp.com",
  projectId: "nss-portal",
  storageBucket: "nss-portal.appspot.com",
  messagingSenderId: "477661459646",
  appId: "1:477661459646:web:fe079eca441b064b4c9aef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
 export default db