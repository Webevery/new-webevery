"use client";
import DashboardBlogItem from "@/components/DashboardBlogItem/DashboardBlogItem";
import DashboardBlogUpdateForm from "@/components/DashboardForms/DashboardBlogUpdateForm";
import styles from "./DashboardBlogIdSection.module.scss";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import Loading from "@/components/Loading/Loading";

const DashboardBlogIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection("blogs", slug);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardBlogItem data={data} />
                    <DashboardBlogUpdateForm data={data} />
                </div>
            )}
        </>
    );
};

export default DashboardBlogIdSection;
