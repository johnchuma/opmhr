import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addApplication = async(data)=>{
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"applications",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}
export const getApplicantApplications = async () => {
    try {
        const ref = collection(firestore, "applications")
        let qr = query(ref, orderBy("createdAt","desc"),where("userId","==",auth.currentUser.email))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getCompanyApplications = async () => {
    try {
        const ref = collection(firestore, "applications")
        let qr = query(ref, orderBy("createdAt","desc"),where("companyId","==",auth.currentUser.email))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getApplications = async () => {
    try {
        const ref = collection(firestore, "applications")
        let qr = query(ref, orderBy("createdAt","desc"))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getApplication = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"applications", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateApplication = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"applications", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteApplication = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"applications", id))
        return response;
    } catch (error) {
        throw error
    }
}