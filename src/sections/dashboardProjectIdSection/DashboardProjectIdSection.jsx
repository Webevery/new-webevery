"use client";
import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem";
import DashboardProjectUpdateForm from "@/components/DashboardForms/DashboardProjectUpdateForm";
import Loading from "@/components/Loading/Loading";
import { GetDataFromSection, GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardProjectIdSection.module.scss";


const DashboardProjectIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading, mutate } = GetIdDataFromSection("ourProjects", slug);

    const info = GetDataFromSection("ourProjects");
    const slugsArr = info.data?.map((item) => item.slug).sort((a, b) => { return a - b });
    const filteredSlugsArr = slugsArr?.filter(item => item !== data?.slug);


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardProjectItem data={data} />
                    <DashboardProjectUpdateForm data={data} mutate={mutate} slugsArr={filteredSlugsArr} />
                </div>
            )}
        </>
    );
};


export default DashboardProjectIdSection;