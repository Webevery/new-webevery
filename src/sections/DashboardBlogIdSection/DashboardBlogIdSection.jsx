"use client";
import DashboardBlogItem from "@/components/DashboardBlogItem/DashboardBlogItem";
import DashboardBlogUpdateForm from "@/components/DashboardForms/DashboardBlogUpdateForm";
import Loading from "@/components/Loading/Loading";
import { GetDataFromSection, GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardBlogIdSection.module.scss";


const DashboardBlogIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading, mutate } = GetIdDataFromSection("blog", slug);

    const info = GetDataFromSection("blog");
    const slugsArr = info.data?.map((item) => item.slug).sort((a, b) => { return a - b });
    const filteredSlugsArr = slugsArr?.filter(item => item !== data?.slug);


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardBlogItem data={data} />
                    <DashboardBlogUpdateForm data={data} mutate={mutate} slugsArr={filteredSlugsArr} />
                </div>
            )}
        </>
    );
};


export default DashboardBlogIdSection;