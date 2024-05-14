import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addJob = async(data)=>{
    try {
        const id = generateId(10)
        const response = await setDoc(doc(firestore,"jobs",id), {
            id,
            createdAt: Timestamp.now(),
            ...data
        })
        return response;
    } catch (error) {
        throw error
    }
}

export const getJobs = async () => {
    try {
        const ref = collection(firestore, "jobs")
        let qr = query(ref, orderBy("createdAt","desc"),where("published","==",true))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getActiveJobs = async () => {
    try {
        const ref = collection(firestore, "jobs");

        // Calculate one week from now
        const oneWeekFromNow = new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

        let qr = query(
            ref,
            orderBy("createdAt", "desc"),
            where("published", "==", true),
            where("deadline", ">=", Timestamp.now())
        );

        const response = await getDocs(qr);
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getCompanyPendingJobs = async () => {
    try {
        const ref = collection(firestore, "jobs")
        let qr = query(ref, orderBy("createdAt","desc"),
        where("published","==",false),
        where("companyId","==",auth.currentUser.email))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getCompanyPublishedJobs = async () => {
    try {
        const ref = collection(firestore, "jobs")
        let qr = query(ref, orderBy("createdAt","desc"),
        where("published","==",true),
        where("companyId","==",auth.currentUser.email))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getUnpublishedJobs = async () => {
    try {
        const ref = collection(firestore, "jobs")
        let qr = query(ref, orderBy("createdAt","desc"),
        where("published","==",false))
        const response = await getDocs(qr)
        return response.docs.map((item) => item.data());
    } catch (error) {
        console.log(error)
        throw error
    }
}
export const getJob = async ( id ) => {
    try {
        const response = await getDoc(doc(firestore,"jobs", id))
        if(response.exists()){
            return response.data()
        }
        return null;
    } catch (error) {
        throw error
    }
}
export const updateJob = async ( id,data ) => {
    try {
        const response = await updateDoc(doc(firestore,"jobs", id),data)
        return response;
    } catch (error) {
        throw error
    }
}
export const deleteJob = async ( id ) => {
    try {
        const response = await deleteDoc(doc(firestore,"jobs", id))
        return response;
    } catch (error) {
        throw error
    }
}