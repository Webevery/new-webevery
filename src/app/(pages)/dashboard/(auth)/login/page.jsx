import { handleGoogleLogin } from '@/lib/actions';
import styles from './page.module.scss'
import { auth } from '@/lib/auth';


const LoginPage = async () => {
    const session = await auth()


    return (
        <div>
            <form action={handleGoogleLogin} className={styles.form}>
                <button className={styles.loginBtn}>Login with Google</button>
            </form>

            <form action="" className={styles.formLogin}>
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <button>Login</button>

            </form>
        </div>
    )
}

export default LoginPage