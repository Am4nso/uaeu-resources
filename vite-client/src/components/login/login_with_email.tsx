import styles from "../../styles/pages/login.module.scss";
import {FormEvent, useState} from "react";
import {sendLonginRequest} from "../../api/auth.ts";


export default function LoginWithEmail() {

    const [loginForm, setLoginForm] = useState({
        id: "",
        password: ""
    });

    function formSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("12321321")

        sendLonginRequest(loginForm.id, loginForm.password).then((res) => {
            if (typeof res == "string") {
                window.location.href = res;
            }
        })
    }

    return (
        <div className={styles.screen} onClick={(e) => {
            // stop propagation to prevent closing the screen when clicking on the panel
            e.stopPropagation();

        }}>
            <div className={styles.panel} onClick={e => e.stopPropagation()}>
                <div className={styles.deleteButton}
                     onClick={() => {
                         const screen = document.querySelector(`.${styles.screen}`) as HTMLDivElement;
                         screen.style.display = "none";
                         document.body.style.removeProperty("max-height");
                         document.body.style.removeProperty("overflow");
                         const html = document.querySelector("html") as HTMLHtmlElement;
                         html.style.overscrollBehaviorY = "auto";
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


                <form onSubmit={formSubmit}>
                    <div className={styles.loginForm}>
                        <input type={"text"} onChange={(e) => {
                            setLoginForm({...loginForm, id: e.target.value})
                        }} required placeholder={"Username or Email"} className={styles.formField}/>
                        <input type={"password"} onChange={(e) => {
                            setLoginForm({...loginForm, password: e.target.value})
                        }} required placeholder={"Password"} className={styles.formField}/>
                        <div id={"login-form"} className={styles.validation}/>

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