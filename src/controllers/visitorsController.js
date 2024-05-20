import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  Timestamp,
  updateDoc,
  where
} from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";

export const addVisitor = async (data) => {
  try {
    const id = generateId(10);
    const response = await setDoc(doc(firestore, "visitors", id), {
      id,
      createdAt: Timestamp.now(),
      ...data
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getVisitors = async () => {
  try {
    const ref = collection(firestore, "visitors");
    let qr = query(ref, orderBy("createdAt", "desc"));
    const response = await getDocs(qr);
    return response.docs.map((item) => item.data());
  } catch (error) {
    console.log(error);
    throw error;
  }
};
