"use client";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { dashboardUserCreateSchema } from "@/yupShemas/dashboardUserCreateSchema";


import { signIn } from 'next-auth/react';
import styles from './DashboardLoginSection.module.scss';


const DashboardLoginSection = () => {
    const initialValues = {
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        resolver: yupResolver(dashboardUserCreateSchema),
    };

    const form = useForm(initialValues);
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

    const onSubmit = (data) => {
        console.log("dashboardLogin:", data);
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className={styles.container}>
            <h1>Dashboard Login</h1>
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
                        type='text'
                        className={styles.formInput}
                        id='name'
                        placeholder=' '
                        {...register("name")}
                    />
                    <label htmlFor='name' className={styles.formLabel}>
                        Name
                    </label>
                    <p className={styles.error}>{errors.name?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type='text'
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
                        type='text'
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
                    Create new!
                </button>
            </form>

            <button onClick={() => signIn('google')}>Login with Google</button>
        </div>
    )
}

export default DashboardLoginSection