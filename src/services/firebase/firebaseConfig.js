import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD592DJBBDXvdN4P1oAjrrig5rzt9m_qp4",
    authDomain: "footbay-d6a20.firebaseapp.com",
    projectId: "footbay-d6a20",
    storageBucket: "footbay-d6a20.appspot.com",
    messagingSenderId: "152807601887",
    appId: "1:152807601887:web:acbef8c518ce9270fadb6a"
};

const app = initializeApp(firebaseConfig);