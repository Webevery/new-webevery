"use client";
import DashboardServiceItem from "@/components/DashboardServiceItem/DashboardServiceItem";
import DashboardServiceUpdateForm from "@/components/DashboardForms/DashboardServiceUpdateForm";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardServiceIdSection.module.scss";

const DashboardServiceIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection("services", slug);

    let changedData;

    if (!isLoading) {
        changedData = {
            _id: data._id,
            title: data.title,
            titleEn: data.titleEn,
            titleGradient: data.titleGradient,
            titleGradientEn: data.titleGradientEn,
            mockup: data.mockup,
            description: data.description,
            descriptionEn: data.descriptionEn,
            price: data.price,
            priceEn: data.priceEn,
            directions: data.directions,
            directionsEn: data.directionsEn,
            slug: data.slug,
        };

        if (changedData && typeof (changedData.directions) === "string" && typeof (changedData.directionsEn) === "string") {
            const directionsArray = changedData.directions.split(' | ');
            const directionsEnArray = changedData.directionsEn.split(' | ');
            changedData.directions = directionsArray;
            changedData.directionsEn = directionsEnArray;
        }
    }


    return (
        <div className={styles.container}>
            <DashboardServiceItem data={changedData} isLoading={isLoading} />
            <DashboardServiceUpdateForm />
        </div>
    );
};

export default DashboardServiceIdSection;
