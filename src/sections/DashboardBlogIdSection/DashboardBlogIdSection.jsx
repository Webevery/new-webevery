"use client";
import DashboardBlogItem from "@/components/DashboardBlogItem/DashboardBlogItem";
import DashboardBlogUpdateForm from "@/components/DashboardForms/DashboardBlogUpdateForm";
import Loading from "@/components/Loading/Loading";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardBlogIdSection.module.scss";


const DashboardBlogIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading, mutate } = GetIdDataFromSection("blog", slug);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardBlogItem data={data} />
                    <DashboardBlogUpdateForm data={data} mutate={mutate} />
                </div>
            )}
        </>
    );
};


export default DashboardBlogIdSection;