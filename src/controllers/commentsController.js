import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addComment = async(data)=>{
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"comments",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getComments = async (id,{setComments}) => {
    try {
        const ref = collection(firestore, "comments")
        let qr = query(ref, orderBy("createdAt","desc"),where("blogId","==",id))
        onSnapshot(qr,(response)=>{
         setComments(response.docs.map((item) => item.data()))
        },(error)=>{
            console.log(error)
            throw error
        })
        
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getComment = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"comments", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateComment = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"comments", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteComment = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"comments", id))
        return response;
    } catch (error) {
        throw error
    }
}