"use client";
import DashboardBlogCreateForm from "@/components/DashboardForms/DashboardBlogCreateForm";
import DashboardBlogItem from "@/components/DashboardBlogItem/DashboardBlogItem";
import Loading from "@/components/Loading/Loading";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardBlogsSection.module.scss";


const DashboardBlogsSection = () => {
    const { data, isLoading, mutate } = GetDataFromSection("blog");

    let sortedByUpdateData = [];

    if (!isLoading) {
        sortedByUpdateData = [...data];

        sortedByUpdateData.sort((a, b) => {
            return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
        });
    }


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <div className={styles.cardsList}>
                        {sortedByUpdateData.map((item, index) => {
                            return (
                                <DashboardBlogItem
                                    key={index}
                                    data={item}
                                    mutate={mutate}
                                />
                            );
                        })}
                    </div>
                    <DashboardBlogCreateForm mutate={mutate} />
                </div>
            )}
        </>
    );
};


export default DashboardBlogsSection;