"use client";

import { Table } from 'antd';
import Image from 'next/image';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';

const Columns = [
{
    title: 'Customer',
    dataIndex: 'name',
    key: '1',
    responsive: ['lg'],
    render: function(_, record: any) {
        return (
            <div className="flex items-center gap-3">
            <Image
                src={record.image_url}
                className="rounded-full"
                width={28}
                height={28}
                alt={`${record.name}'s profile picture`}
            />
            <p>{record.name}</p>
            </div>
        )
    }
}, 
{
    title: 'Customer',
    dataIndex: 'name',
    key: '2',
    responsive: ['xs'],
}, 
{
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    responsive: ['lg'],
},
{
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: number) => <>{formatCurrency(amount)}</>
},
{
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    responsive: ['lg'],
    render: (date: string) => <>{formatDateToLocal(date)}</>
},
{
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => <InvoiceStatus status={status} />
},
{
    title: 'Actions',
    dataIndex: 'id',
    key: 'actions',
    render: (id: string) => (
    <div className="flex gap-3">
        <UpdateInvoice id={id} />
        <DeleteInvoice id={id} />
      </div>
    )
}
];
export function AntTable({ invoices }: { invoices: any[] }) {
    return <Table columns={Columns} dataSource={invoices} pagination={false} />;
}