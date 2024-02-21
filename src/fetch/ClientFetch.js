'use client';
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

export const GetOurProjects = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/ourProjects`, fetcher);
};

export const GetProject = (slug) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/ourProjects/${slug}`, fetcher);
};

export const GetBlogs = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/blogs`, fetcher);
};

export const GetBlog = (slug) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/blogs/${slug}`, fetcher);
};

export const GetOurServices = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/services`, fetcher);
};

export const GetService = (slug) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/services/${slug}`, fetcher);
};

export const GetTeam = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useSWR(`/api/team`, fetcher);
};