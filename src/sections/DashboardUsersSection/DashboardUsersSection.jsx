"use client";
import Loading from "@/components/Loading/Loading";
import DashboardUserItem from "@/components/DashboardUserItem/DashboardUserItem";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardUsersSection.module.scss";


const DashboardUsersSection = () => {
    const { data, isLoading, mutate } = GetDataFromSection("users");
    let sortedByUpdateData = [];

    if (!isLoading) {
        sortedByUpdateData = [...data];

        sortedByUpdateData.sort((a, b) => {
            return Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
        });
    }

    const dataWithoutOwner = sortedByUpdateData.filter(item => item.email !== process.env.NEXT_PUBLIC_OWNER)


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <div className={styles.cardsList}>
                        {dataWithoutOwner.map((item, index) => {
                            return (
                                <DashboardUserItem
                                    key={index}
                                    data={item}
                                    mutate={mutate}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};


export default DashboardUsersSection;