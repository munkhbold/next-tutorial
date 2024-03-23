"use client";

import { Pagination as Paginationd } from 'antd';
import { useSearchParams, usePathname, useRouter} from 'next/navigation';


export function Pagination({ totalPages }: { totalPages: number }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const router = useRouter();
    
    function changePage(page: number) {
        const params = new URLSearchParams(searchParams);
        params.set('page', page.toString());
        router.replace(`${pathname}?${params.toString()}`)
    }

  return (
    <div className="w-full">
      <div className="mt-5 flex w-full justify-center">
        <Paginationd defaultCurrent={currentPage}
            total={totalPages}
            onChange={changePage}/>
      </div>
    </div>
  );
}