// import Form from '@/app/ui/invoices/create-form';
import Form from '@/app/ui/invoices/ant-create-form';
// import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
// import Breadcrumbs from '@/app/ui/invoices/antBreadcrumbs';
import { Breadcrumb } from 'antd';
import { fetchCustomers } from '@/app/lib/data';
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumb
        items={[
          { 
            title: 'Invoices',
            href: '/dashboard/invoices',
          },
          {
            title: 'Create Invoice',
            href: '/dashboard/invoices/create',
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}