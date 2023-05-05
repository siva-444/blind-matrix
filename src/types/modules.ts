export interface JobListType {
  id: number;
  uid: string;
  name: string;
  company_name: string;
  role: string;
  type: string;
  invoice_name: string | null;
  created_date_txt: string;
  address: string;
}
