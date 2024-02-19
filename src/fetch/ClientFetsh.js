'use client';
import useSWR from 'swr';

export const GetOurProjects = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/ourProjects`, fetcher);
};

export const GetOurProjectsById = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/ourProjects/${id}`, fetcher);
};

// export const GetBlogs = () => {
//   const fetcher = (...args) => fetch(...args).then((res) => res.json());
//   return useSWR(`/api/blogs`, fetcher);
// };

export const GetOurServices = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/services`, fetcher);
};

export const GetOurServicesById = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/services/${id}`, fetcher);
};