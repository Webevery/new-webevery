"use client"
import { useFormState } from "react-dom";
import styles from './DashboardRegisterForm.module.scss'
import { register } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useEffect } from "react";


const DashboardRegisterForm = () => {
    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push("/dashboard/login");
    }, [state?.success, router]);


    return (
        <form action={formAction} className={styles.form}>
            <input type="text" placeholder="name" name="name" />
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Register</button>
            {state?.error && <p className={styles.errMessage} >{state.error}</p>}
            <p className={styles.text}>Do you have an account? <Link className={styles.link} href='/dashboard/login'>Login</Link> </p>
        </form>
    )
}

export default DashboardRegisterForm