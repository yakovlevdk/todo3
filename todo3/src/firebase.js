import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOo4SPTZIcoHlRT_s7smZ7U0IInQ_ccPo",
  authDomain: "todo-de2f2.firebaseapp.com",
  projectId: "todo-de2f2",
  storageBucket: "todo-de2f2.appspot.com",
  messagingSenderId: "1044879084558",
  appId: "1:1044879084558:web:c0ff8d695f55d7fdfe405f",
  databaseURL:
    "https://todo-de2f2-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
