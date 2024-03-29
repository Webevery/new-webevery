"use client";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { dashboardUserLoginSchema } from '@/yupSchemas/dashboardUserLoginSchema';
import Link from 'next/link';
import styles from './DashboardLoginSection.module.scss';


const DashboardLoginSection = () => {
    const session = useSession();
    // console.log("session", session)


    const initialValues = {
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(dashboardUserLoginSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("dashboardLogin:", data);
        const { email, password } = data;
        signIn('credentials', { email, password })
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <>
            {session.status === "unauthenticated" && <div className={styles.container}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                    noValidate
                >
                    <h3 className={styles.formTitle}>
                        Let`s login User!
                    </h3>

                    <div className={styles.inputGroup}>
                        <input
                            type='email'
                            className={styles.formInput}
                            id='email'
                            placeholder=' '
                            {...register("email")}
                        />
                        <label htmlFor='email' className={styles.formLabel}>
                            Email
                        </label>
                        <p className={styles.error}>{errors.email?.message}</p>
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type='password'
                            className={styles.formInput}
                            id='password'
                            placeholder=' '
                            {...register("password")}
                        />
                        <label htmlFor='password' className={styles.formLabel}>
                            Password
                        </label>
                        <p className={styles.error}>{errors.password?.message}</p>
                    </div>

                    <button
                        type='submit'
                        className={styles.formButton}
                        disabled={isErrors || isSubmitting}
                    >
                        Login
                    </button>
                </form>

                <button onClick={() => signIn('google')}>Login with Google</button>

                <p className={styles.text}>You still do not have an account? <Link className={styles.link} href='/dashboard/register'>Register</Link> </p>
            </div>}
        </>
    )
}

export default DashboardLoginSection;
