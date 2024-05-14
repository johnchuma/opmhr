import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const registerUser = async(data)=>{
    try {
      const  {email,password} = data;
      const userDoc = await getDoc(doc(firestore, "users", email));
      let response;
      if (userDoc.exists()) {
        return {
            status:false,
            message:"Email already existes"
        }
      }
      else{
        const credentials = await createUserWithEmailAndPassword(auth,email,password)
        const id = credentials.user.email
         response = await setDoc(doc(firestore,"users",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
      }
      
        return {status:true};
    } catch (error) {
        throw error
    }
}

export const getUsers = async () => {
    try {
        const ref = collection(firestore, "users")
        let qr = query(ref,  where("role","==","User"), orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getCompanies = async () => {
    try {
        const ref = collection(firestore, "users")
        let qr = query(ref,  where("role","==","Company"), orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getUser = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"users", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateUser = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"users", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteUser = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"users", id))
        return response;
    } catch (error) {
        throw error
    }
}