"use client";
import { GetDataFromSection, GetIdDataFromSection } from "@/fetch/ClientFetch";
import DashboardServiceItem from "@/components/DashboardServiceItem/DashboardServiceItem";
import DashboardServiceUpdateForm from "@/components/DashboardForms/DashboardServiceUpdateForm";
import Loading from "@/components/Loading/Loading";
import styles from "./DashboardServiceIdSection.module.scss";


const DashboardServiceIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading, mutate } = GetIdDataFromSection("services", slug);

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

        if (
            changedData &&
            typeof changedData.directions === "string" &&
            typeof changedData.directionsEn === "string"
        ) {
            const directionsArray = changedData.directions.split(" | ");
            const directionsEnArray = changedData.directionsEn.split(" | ");
            changedData.directions = directionsArray;
            changedData.directionsEn = directionsEnArray;
        }
    }

    const info = GetDataFromSection("services");
    const slugsArr = info.data?.map((item) => item.slug).sort((a, b) => { return a - b });
    const filteredSlugsArr = slugsArr?.filter(item => item !== data?.slug);


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardServiceItem data={changedData} />
                    <DashboardServiceUpdateForm data={data} mutate={mutate} slugsArr={filteredSlugsArr} />
                </div>
            )}
        </>
    );
};


export default DashboardServiceIdSection;