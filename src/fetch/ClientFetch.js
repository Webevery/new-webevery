'use client';
import { usePathname } from 'next/navigation';
import useSWR from 'swr';

// universal
export const GetDataFromSection = (path) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // console.log('/api/${path}', `/api/${path}`)
  return useSWR(`/api/${path}`, fetcher);
};

//universal
export const GetIdDataFromSection = (path, slug) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // console.log('/api/${path}/${slug}', `/api/${path}/${slug}`)
  return useSWR(`/api/${path}/${slug}`, fetcher);
};

// universal for data and dataId with usePathname
export const GetDataWithPathname = () => {
  const pathname = usePathname();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // console.log('/api/${pathname}', `/api/${pathname}`)
  return useSWR(`/api/${pathname}`, fetcher);
};