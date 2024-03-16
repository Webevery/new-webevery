"use client";
import DashboardServiceItem from "@/components/DashboardServiceItem/DashboardServiceItem";
import DashboardServiceCreateForm from "@/components/DashboardForms/DashboardServiceCreateForm";
import styles from "./DashboardServicesSection.module.scss";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import Loading from "@/components/Loading/Loading";

const DashboardServicesSection = () => {
    const { data, isLoading } = GetDataFromSection("services");
    // console.log('data', data)
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
    // console.log('changedData', changedData)


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <div className={styles.cardsList}>
                        {changedData.map((item, index) => {
                            // console.log("item", item)
                            return (
                                <DashboardServiceItem key={index} data={item} />
                            );
                        })}
                    </div>

                    <DashboardServiceCreateForm />
                </div>
            )}
        </>
    );
};

export default DashboardServicesSection;
