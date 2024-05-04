"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DashboardEditAndDelete from "../DashboardEditAndDelete/DashboardEditAndDelete";
import styles from "./DashboardUserItem.module.scss";


const DashboardUserItem = ({ data, mutate }) => {
    const pathname = usePathname();
    const isList = pathname.endsWith("users");
    const [isAdminRules, setIsAdminRules] = useState(data.isAdmin)

    const onSubmit = async () => {
        const updatedData = {
            isAdmin: isAdminRules,
        };

        try {
            await fetch(`/api/users/${data.slug}`, {
                method: "PATCH",
                body: JSON.stringify(updatedData),
            });

            console.log("Information updated to DB");

            // оновлення існуючої сторінки
            mutate();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <p>{data.name}</p>
            <p className={`${styles.slug} ${styles.ukrainian}`}>{data.email}</p>
            <form className={styles.accessForm} onSubmit={onSubmit}>
                <label htmlFor="accessInput">Is Admin:
                    <input className={styles.accessInput}
                        id="accessInput"
                        type="checkbox"
                        checked={isAdminRules} onChange={() => {
                            if (isAdminRules === true) {
                                setIsAdminRules(false);
                            } else {
                                setIsAdminRules(true);
                            }
                        }} />
                </label>
                <button type="submit" className={styles.saveBtn}>Save to DB</button>
            </form>
            <p>Admin: {isAdminRules ? "true" : "false"}</p>

            {isList && (
                <DashboardEditAndDelete data={data} pathname={pathname} mutate={mutate} />
            )}
        </div>
    );
};

export default DashboardUserItem;