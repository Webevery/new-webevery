import DashboardRegisterForm from "@/components/DashboardRegisterForm/DashboardRegisterForm";
import styles from "./DashboardRegisterSection.module.scss";


const DashboardRegisterSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <DashboardRegisterForm />
            </div>
        </div>
    );
};

export default DashboardRegisterSection;




// "use client";
// import { useEffect, useState } from 'react';
// import Link from 'next/link';

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { dashboardUserRegisterSchema } from '@/yupSchemas/dashboardUserRegisterSchema';
// import styles from './DashboardRegisterSection.module.scss';
// import { useRouter } from 'next/navigation';


// const DashboardRegisterSection = () => {
//     const router = useRouter();
//     const [errMessage, setErrMessage] = useState(undefined)

//     const initialValues = {
//         defaultValues: {
//             name: "",
//             email: "",
//             password: "",
//         },
//         resolver: yupResolver(dashboardUserRegisterSchema),
//     };

//     const form = useForm(initialValues);
//     const { register, handleSubmit, formState, reset } = form;
//     const { errors, isSubmitSuccessful, isErrors, isSubmitting } = formState;

//     const onSubmit = async (data) => {
//         console.log("dashboardRegister:", data);
//         const { name, email, password } = data;

//         try {
//             const response = await fetch('/api/auth/register', {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name,
//                     email,
//                     password,
//                     isAdmin: false,
//                 }),
//             });

//             response.status === 201 && router.push("/dashboard");
//             response.status === 401 && setErrMessage("User already exists")
//             // console.log("response", response)
//         } catch (error) {
//             // console.log("error", error);
//             throw new Error(error)
//         }
//     };

//     useEffect(() => {
//         if (isSubmitSuccessful) {
//             reset();
//         }
//     }, [isSubmitSuccessful, reset]);

//     return (
//         <div className={styles.container}>
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className={styles.form}
//                 noValidate
//             >
//                 <h3 className={styles.formTitle}>
//                     Let`s register User!
//                 </h3>

//                 <div className={styles.inputGroup}>
//                     <input
//                         type='text'
//                         className={styles.formInput}
//                         id='name'
//                         placeholder=' '
//                         {...register("name")}
//                     />
//                     <label htmlFor='name' className={styles.formLabel}>
//                         Name
//                     </label>
//                     <p className={styles.error}>{errors.name?.message}</p>
//                 </div>

//                 <div className={styles.inputGroup}>
//                     <input
//                         type='email'
//                         className={styles.formInput}
//                         id='email'
//                         placeholder=' '
//                         {...register("email")}
//                     />
//                     <label htmlFor='email' className={styles.formLabel}>
//                         Email
//                     </label>
//                     <p className={styles.error}>{errors.email?.message}</p>
//                 </div>

//                 <div className={styles.inputGroup}>
//                     <input
//                         type='password'
//                         className={styles.formInput}
//                         id='password'
//                         placeholder=' '
//                         {...register("password")}
//                     />
//                     <label htmlFor='password' className={styles.formLabel}>
//                         Password
//                     </label>
//                     <p className={styles.error}>{errors.password?.message}</p>
//                 </div>

//                 <button
//                     type='submit'
//                     className={styles.formButton}
//                     disabled={isErrors || isSubmitting}
//                 >
//                     Register
//                 </button>
//             </form>
//             {errMessage && <p className={styles.errMessage}>{errMessage}</p>}
//             <p className={styles.text}>Do you have an account? <Link className={styles.link} href='/dashboard'>Login</Link> </p>
//         </div>
//     )
// }

// export default DashboardRegisterSection