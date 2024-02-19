'use client';
import useSWR from 'swr';

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