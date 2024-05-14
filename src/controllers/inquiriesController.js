import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addInquiry = async(data)=>{
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"inquiries",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getInquiries = async () => {
    try {
        const ref = collection(firestore, "inquiries")
        let qr = query(ref, orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getInquiry = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"inquiries", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateInquiry = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"inquiries", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteInquiry = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"inquiries", id))
        return response;
    } catch (error) {
        throw error
    }
}