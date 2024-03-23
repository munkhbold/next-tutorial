import { fetchFilteredInvoices } from '@/app/lib/data';
import { AntTable } from '@/app/ui/invoices/antTable';
import { Table } from 'antd';
import Image from 'next/image';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';


export default async function InvoicesTable({
  query,
  currentPage,
  totalPages,
}: {
  query: string;
  currentPage: number;
  totalPages: number;
}) {
  
  const invoices = await fetchFilteredInvoices(query, currentPage);
  return (
    <div className="mt-6 flow-root">
      <AntTable invoices={invoices}  />
    </div>
  );
}
