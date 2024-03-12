"use client";
import DashboardProjectItem from "@/components/DashboardProjectItem/DashboardProjectItem";
import DashboardProjectCreateForm from "@/components/DashboardForms/DashboardProjectCreateForm";
import styles from "./DashboardProjectsSection.module.scss";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import Loading from "@/components/Loading/Loading";

const DashboardProjectsSection = () => {
    const { data, isLoading } = GetDataFromSection("ourProjects");

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <div className={styles.cardsList}>
                        {data.map((item, index) => {
                            return (
                                <DashboardProjectItem
                                    key={index}
                                    data={item}
                                    isLoading={isLoading}
                                />
                            );
                        })}
                    </div>

                    <DashboardProjectCreateForm />
                </div>
            )}
        </>
    );
};

export default DashboardProjectsSection;
