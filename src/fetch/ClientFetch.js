'use client';
import { usePathname } from 'next/navigation';
import useSWR from 'swr';

// universal
export const GetDataFromSection = (path) => {
  const dateInMs = Date.now()
  const date = new Date(dateInMs)
  console.log(path, "date:", date)
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/${path}`, fetcher);
};

//universal
export const GetIdDataFromSection = (path, slug) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/${path}/${slug}`, fetcher);
};

// universal for data and dataId with usePathname
export const GetDataWithPathname = () => {
  const pathname = usePathname();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/${pathname}`, fetcher);
};