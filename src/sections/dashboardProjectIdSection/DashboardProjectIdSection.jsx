"use client";
import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem";
import DashboardProjectUpdateForm from "@/components/DashboardForms/DashboardProjectUpdateForm";
import Loading from "@/components/Loading/Loading";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardProjectIdSection.module.scss";


const DashboardProjectIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading, mutate } = GetIdDataFromSection("ourProjects", slug);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardProjectItem data={data} />
                    <DashboardProjectUpdateForm data={data} mutate={mutate} />
                </div>
            )}
        </>
    );
};


export default DashboardProjectIdSection;