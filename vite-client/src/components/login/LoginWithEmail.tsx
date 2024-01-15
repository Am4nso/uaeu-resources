import styles from "../../styles/pages/login.module.scss";


export default function LoginWithEmail() {

    return (
        <div className={styles.screen} onClick={(e) => {
            const screen = document.querySelector(`.${styles.screen}`) as HTMLDivElement;
            e.stopPropagation();
            screen.style.display = "none";
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }}>
            <div className={styles.panel} onClick={e => e.stopPropagation()}>
                <div className={styles.deleteButton}
                     onClick={() => {
                         const screen = document.querySelector(`.${styles.screen}`) as HTMLDivElement;
                         screen.style.display = "none";
                     }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 256 256">
                        <path fill="currentColor"
                              d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"/>
                    </svg>
                </div>

                <div className={styles.panelTitle}>
                    <h2>Login</h2>
                </div>


                <form>
                    <div className={styles.loginForm}>
                        <input type={"text"} required placeholder={"Username or Email"} className={styles.formField}/>
                        <input type={"password"} required placeholder={"Password"} className={styles.formField}/>
                    </div>

                    <div>
                        <button type={"submit"} className={styles.formButton}>Login</button>
                    </div>
                </form>

                <div>
                    <a href={"/forgot"}>Forgot Password?</a>
                </div>
            </div>
        </div>
    )

}