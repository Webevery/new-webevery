"use client";
import Loading from "@/components/Loading/Loading";
import DashboardCoworkerItem from "@/components/DashboardCoworkerItem/DashboardCoworkerItem";
import DashboardCoworkerCreateForm from "@/components/DashboardForms/DashboardCoworkerCreateForm";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardCoworkersSection.module.scss";


const DashboardCoworkersSection = () => {
    const { data, isLoading } = GetDataFromSection("team");
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
                                <DashboardCoworkerItem
                                    key={index}
                                    data={item}
                                    isLoading={isLoading}
                                />
                            );
                        })}
                    </div>

                    <DashboardCoworkerCreateForm />
                </div>
            )}
        </>
    );
};

export default DashboardCoworkersSection;
