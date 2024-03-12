"use client";
import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem";
import DashboardProjectUpdateForm from "@/components/DashboardForms/DashboardProjectUpdateForm";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardProjectIdSection.module.scss";

const DashboardProjectIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection("ourProjects", slug);

    return (
        <div className={styles.container}>
            <DashboardProjectItem data={data} isLoading={isLoading} />
            <DashboardProjectUpdateForm />
        </div>
    );
};

export default DashboardProjectIdSection;
