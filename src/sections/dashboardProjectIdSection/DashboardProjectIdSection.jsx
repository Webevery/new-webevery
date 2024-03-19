"use client";

import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem";
import DashboardProjectUpdateForm from "@/components/DashboardForms/DashboardProjectUpdateForm";
import Loading from "@/components/Loading/Loading";

import styles from "./DashboardProjectIdSection.module.scss";

const DashboardProjectIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection("ourProjects", slug);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardProjectItem data={data} />
                    <DashboardProjectUpdateForm data={data} />
                </div>
            )}
        </>
    );
};

export default DashboardProjectIdSection;
