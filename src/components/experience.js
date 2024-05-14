import { formatDate } from "../utils/format_date";

const ExperienceItem = ({item}) => {
    return ( <div>
        <div className="border p-4">
                <h1 className="font-bold ">{item.position}</h1>
                <p className="text-sm mb-1 opacity-70">At {item.company}</p>
                <div className="flex space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <p className="text-sm">From {formatDate(item.startDate.toDate())} to {formatDate(item.endDate.toDate())}</p>
                </div>
                <h1 className=" pt-3 pb-1 font-bold  text-green-500">Responsibilies</h1>
                <p className=" text-sm">{item.description}</p>
                </div>
    </div> );
}
 
export default ExperienceItem;