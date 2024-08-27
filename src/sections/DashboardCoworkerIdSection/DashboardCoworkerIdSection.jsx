"use client";
import Loading from "@/components/Loading/Loading";
import DashboardCoworkerItem from "@/components/DashboardCoworkerItem/DashboardCoworkerItem";
import DashboardCoworkerUpdateForm from "@/components/DashboardForms/DashboardCoworkerUpdateForm";
import { GetDataFromSection, GetIdDataFromSection } from "@/fetch/ClientFetch";
import styles from "./DashboardCoworkerIdSection.module.scss";


const DashboardCoworkerIdSection = ({ params }) => {
    const { slug } = params;
    const { data, isLoading, mutate } = GetIdDataFromSection("team", slug);

    const info = GetDataFromSection("team");
    const slugsArr = info.data?.map((item) => item.slug).sort((a, b) => { return a - b });
    const filteredSlugsArr = slugsArr?.filter(item => item !== data?.slug);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <div className={styles.container}>
                    <DashboardCoworkerItem data={data} />
                    <DashboardCoworkerUpdateForm data={data} mutate={mutate} slugsArr={filteredSlugsArr} />
                </div>
            )}
        </>
    );
};


export default DashboardCoworkerIdSection;