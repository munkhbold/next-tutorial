"use client";

import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { Card, Statistic } from 'antd';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default function CardWrapper({ cardData }:{ cardData: any }) {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = cardData; 
  return (
    <>
      <CardItem title="Collected" value={totalPaidInvoices} type="collected" />
      <CardItem title="Pending" value={totalPendingInvoices} type="pending" />
      <CardItem title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <CardItem
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> 
    </>
  );
}

export function CardItem({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
  }) {
  const Icon = iconMap[type];
    console.log('value', value)
  return (
    <Card bordered={false} type="inner">
        <Statistic
          title={title}
          value={value}
          precision={2}
          prefix={Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        />
    </Card>
  );
}