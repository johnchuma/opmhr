import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addBlog = async(data)=>{
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"blogs",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getBlogs = async () => {
    try {
        const ref = collection(firestore, "blogs")
        let qr = query(ref, orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getBlog = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"blogs", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateBlog = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"blogs", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteBlog = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"blogs", id))
        return response;
    } catch (error) {
        throw error
    }
}