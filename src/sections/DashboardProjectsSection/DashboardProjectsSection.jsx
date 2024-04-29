"use client";
import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem";
import DashboardProjectCreateForm from "@/components/DashboardForms/DashboardProjectCreateForm";
import styles from "./DashboardProjectsSection.module.scss";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import Loading from "@/components/Loading/Loading";


const DashboardProjectsSection = () => {
    const { data, isLoading, mutate } = GetDataFromSection("ourProjects");

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
                                <DashboardProjectItem
                                    key={index}
                                    data={item}
                                />
                            );
                        })}
                    </div>

                    <DashboardProjectCreateForm mutate={mutate} />
                </div>
            )}
        </>
    );
};


export default DashboardProjectsSection;