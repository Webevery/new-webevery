"use client";
import Loading from "@/components/Loading/Loading";
import DashboardCoworkerItem from "@/components/DashboardCoworkerItem/DashboardCoworkerItem";
import DashboardCoworkerCreateForm from "@/components/DashboardForms/DashboardCoworkerCreateForm";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardCoworkersSection.module.scss";


const DashboardCoworkersSection = () => {
    const { data, isLoading, mutate } = GetDataFromSection("team");
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
                                <DashboardCoworkerItem
                                    key={index}
                                    data={item}
                                    mutate={mutate} />
                            );
                        })}
                    </div>

                    <DashboardCoworkerCreateForm mutate={mutate} slugsArr={slugsArr} />
                </div>
            )}
        </>
    );
};


export default DashboardCoworkersSection;