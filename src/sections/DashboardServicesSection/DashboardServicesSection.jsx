"use client";
import DashboardServiceItem from "@/components/DashboardServiceItem/DashboardServiceItem";
import DashboardServiceCreateForm from "@/components/DashboardForms/DashboardServiceCreateForm";
import Loading from "@/components/Loading/Loading";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardServicesSection.module.scss";


const DashboardServicesSection = () => {
    const { data, isLoading, mutate } = GetDataFromSection("services");
    let changedData = [];

    if (!isLoading) {
        changedData = [...data];
        changedData.map(item => {
            if (typeof (item.directions) === "string" && typeof (item.directionsEn) === "string") {
                const directionsArray = item.directions.split(" | ");
                const directionsEnArray = item.directionsEn.split(" | ");
                item.directions = directionsArray;
                item.directionsEn = directionsEnArray;
            }
        })
    }

    let sortedByUpdateData = [];

    if (!isLoading) {
        sortedByUpdateData = [...changedData];

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
                                <DashboardServiceItem key={index} data={item} />
                            );
                        })}
                    </div>

                    <DashboardServiceCreateForm mutate={mutate} />
                </div>
            )}
        </>
    );
};


export default DashboardServicesSection;