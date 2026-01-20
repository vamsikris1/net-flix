
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDLqqbnKUrsnx53_am9cTVXO3MubGq0uaM",
  authDomain: "netflix-clone-dd585.firebaseapp.com",
  projectId: "netflix-clone-dd585",
  storageBucket: "netflix-clone-dd585.firebasestorage.app",
  messagingSenderId: "932818138546",
  appId: "1:932818138546:web:ed7ff00d2b2bacf09120ab"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth,email, password );
       const user = res.user;
       await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    } catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }

}
const login = async(email, password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};