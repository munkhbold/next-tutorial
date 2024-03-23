// import Form from '@/app/ui/invoices/create-form';
import Form from '@/app/ui/invoices/ant-create-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import Breadcrumbs from '@/app/ui/invoices/antBreadcrumbs';
import { clsx } from 'clsx';
import { Breadcrumb } from 'antd';
import { fetchCustomers } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumb className={clsx(lusitana.className, 'flex text-xl md:text-2xl')}
        items={[
          { 
            title: 'Invoices',
            href: '/dashboard/invoices',
          },
          {
            title: 'Create Invoice',
            href: '/dashboard/invoices/create'
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}