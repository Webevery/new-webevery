"use client";
import { useFormState } from "react-dom";
import Link from 'next/link';
import { login } from '@/lib/actions';
import styles from './DashboardLoginForm.module.scss';


const DashboardLoginForm = () => {
    const [state, formAction] = useFormState(login, undefined);


    return (
        <form action={formAction} className={styles.form}>
            <input type="email" placeholder="email" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Login</button>
            {state?.error && <p className={styles.errMessage} >{state.error}</p>}
            <p className={styles.text}>You still do not have an account? <Link className={styles.link} href='/dashboard/register'>Register</Link> </p>
        </form>
    )
}


export default DashboardLoginForm