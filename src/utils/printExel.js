import * as XLSX from 'xlsx';
import { formatDate } from './format_date';


export const exportToExcel = (subscribers) => {
  const data = [
    ['Subscribed','Phone', 'Email'],
    ...subscribers.map(item => [formatDate(item.createdAt.toDate()),item.phone, item.email])
  ];

  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Add worksheet to the workbook
  const ws = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, 'Subscribers');

  // Generate a file and save it
  XLSX.writeFile(wb, 'subscribers.xlsx');
};
