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

    // for yup-validation
    const slugsArr = data?.map((item) => item.slug).sort((a, b) => { return a - b });


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
                    <DashboardBlogCreateForm mutate={mutate} slugsArr={slugsArr} />
                </div>
            )}
        </>
    );
};


export default DashboardBlogsSection;