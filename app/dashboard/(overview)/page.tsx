import CardWrapper from '@/app/ui/dashboard/ant-cards';
import RevenueChart from '@/app/ui/dashboard/ant-revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {  fetchCardData } from '@/app/lib/data';

export default async function Page() {
  const cardData = await fetchCardData();
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CardWrapper cardData={cardData} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart />
          <LatestInvoices />
      </div>
    </main>
  );
}