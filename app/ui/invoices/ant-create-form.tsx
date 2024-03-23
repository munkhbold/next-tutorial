'use client';
import clsx from 'clsx';
import React from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
// import { Button } from '@/app/ui/button';
import { createInvoice } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { Form as Formd,
  Space,
  Select,
  Radio,
  InputNumber,
  theme,
  Alert,
  Button,
  Flex
} from 'antd';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState = {
    message: null,
    errors: {}
  };

  const [state, dispatch] = useFormState(createInvoice, initialState);
  const { token } = theme.useToken();

  const formStyle: React.CSSProperties = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

  const customerOptions = customers.map((customer) => {
    return {
      value: customer.id,
      label: customer.name
    }});


  return (
    <main className="mt-5">
          {state.message && (
        <Alert message="Error"
               description={state.message}
               type="error"
               showIcon/>)}
                     <Formd
        onFinish={dispatch}
        layout="vertical"
        wrapperCol={{ flex: 1 }}
        colon={false}
        style={formStyle}
        size="middle"
      >

        <Formd.Item label="Choose customer" name="customerId" rules={[{ 
          required: true,
          message: 'Please select a customer'
        }]} >
          <Select
            placeholder="Select a customer"
            options={customerOptions}
            suffixIcon={<UserCircleIcon className="h-5 w-5 text-gray-400" />}
            />
        </Formd.Item>

        <Formd.Item label="Choose an amount" name="amount" rules={[{ 
          required: true,
          message: "Please enter an amount greater than $0."
        }]}>
          <InputNumber
            prefix={<CurrencyDollarIcon className="h-5 w-5 text-gray-400" />}
            style={{ width: '100%' }}
            formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            // formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
            placeholder="Enter USD amount"
          />
        </Formd.Item>

        <Formd.Item label="Set the invoice status" name="status">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="pending">pending</Radio.Button>
            <Radio.Button value="paid">paid</Radio.Button>
          </Radio.Group>
        </Formd.Item>

        <Formd.Item label=" ">
          <Flex gap="middle" wrap="wrap" justify="end">
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>

            <Button 
              htmlType="submit"
              type="primary"
              size="large"
              className={clsx(
                'flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
              )}
            >Create Invoice</Button>
          </Flex>
        </Formd.Item>
      </Formd>
    </main>
  );
}
