import { collection, deleteDoc, doc, getCountFromServer, getDoc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc, where } from "firebase/firestore";
import { generateId } from "../utils/idGenerator";
import { auth, firestore } from "../utils/firebase";



export const getAnalytics = async () => {
    try {
        const refUsers = collection(firestore, "users")
        const refVisitors = collection(firestore, "visitors")
        const refBlogs = collection(firestore, "blogs")
        const refJobs = collection(firestore, "jobs")
        const refInquires = collection(firestore, "inquiries")


        let qrApplicants = query(refUsers,  where("role","==","User"))
        let qrCompanies = query(refUsers,  where("role","==","Company"))
        let qrBlogs = query(refBlogs)
        let qrJobs = query(refJobs)
        let qrVisitors = query(refVisitors)
        let qrInquiries = query(refInquires,where('isRead',"==",false))


        const applicantsCount = await  getCountFromServer(qrApplicants)
        const companiesCount = await  getCountFromServer(qrCompanies)
        const blogsCount = await  getCountFromServer(qrBlogs)
        const jobsCount = await  getCountFromServer(qrJobs)
        const inquiryCount = await  getCountFromServer(qrInquiries)
        const visitorsCount = await  getCountFromServer(qrVisitors)


        return {
            totalApplicants:applicantsCount.data().count,
            totalCompanies:companiesCount.data().count,
            totalBlogs:blogsCount.data().count,
            totalJobs:jobsCount.data().count,
            totalVisitors:visitorsCount.data().count,
            totalInquiries:inquiryCount.data().count,

        }
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getVisitorsOverAYear = async (year) => {
    try {
        const refVisitors = collection(firestore, 'visitors');
        const snapshot = await getDocs(refVisitors);
        const visitorsData = [];

        snapshot.forEach(doc => {
            const createdAt = doc.data().createdAt.toDate(); // Assuming createdAt is a timestamp field
            const docYear = createdAt.getFullYear(); // Get year of the document
            
            if (docYear === year) {
                const month = createdAt.getMonth(); // Get month index (0-indexed)
                
                // If visitorsData for this month doesn't exist, create it
                if (!visitorsData[month]) {
                    visitorsData[month] = 0;
                }

                // Increment visitors count for this month
                visitorsData[month]++;
            }
        });

        // Fill in missing months with 0 visitors
        for (let i = 0; i < 12; i++) {
            if (typeof visitorsData[i] === 'undefined') {
                visitorsData[i] = 0;
            }
        }

        return visitorsData;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

