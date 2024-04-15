import { auth } from "@/lib/auth";
import styles from './page.module.scss';


const DashboardPage = async () => {
    const session = await auth();
    const username = session?.user.name;

    return (
        <>
            {session?.user.isAdmin || session?.user.email === process.env.NEXT_PUBLIC_OWNER ? <h2 className={styles.successWelcome}>{username}, Welcome to the Dashboard !</h2>
                : <h2 className={styles.errorWelcome}>{username}, you do not have enough access rights !</h2>
            }
        </>
    )
}

export default DashboardPage