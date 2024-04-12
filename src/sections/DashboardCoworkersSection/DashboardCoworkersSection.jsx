"use client";
import DashboardCoworkerItem from "@/components/DashboardCoworkerItem/DashboardCoworkerItem";
import DashboardCoworkerCreateForm from "@/components/DashboardForms/DashboardCoworkerCreateForm";
import styles from "./DashboardCoworkersSection.module.scss";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import Loading from "@/components/Loading/Loading";

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
