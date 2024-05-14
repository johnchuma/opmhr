import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "./firebase"

export const getLink = async(file)=>{
    try {
      let link;
      if(file){
        const reference = ref(storage,`images/${file.name}`)
        await uploadBytes(reference,file)  
       link = await getDownloadURL(reference)
      }

  return link;
    } catch (error) {
        throw error
    }
  
}