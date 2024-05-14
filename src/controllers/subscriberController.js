import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addSubscriber = async(data)=>{
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"subscribers",data.email), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getSubscribers = async () => {
    try {
        const ref = collection(firestore, "subscribers")
        let qr = query(ref, orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getSubscriber = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"subscribers", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateSubscriber = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"subscribers", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteSubscriber = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"subscribers", id))
        return response;
    } catch (error) {
        throw error
    }
}