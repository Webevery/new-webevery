"use client";
import Loading from "@/components/Loading/Loading";
import DashboardCoworkerItem from "@/components/DashboardCoworkerItem/DashboardCoworkerItem";
import DashboardCoworkerUpdateForm from "@/components/DashboardForms/DashboardCoworkerUpdateForm";
import { GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardCoworkerIdSection.module.scss";


const DashboardCoworkerIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading } = GetIdDataFromSection("team", slug);


    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardCoworkerItem data={data} />
                    <DashboardCoworkerUpdateForm data={data} />
                </div>
            )}
        </>
    );
};


export default DashboardCoworkerIdSection;